const bcrypt = require('bcrypt');
const User = require('../models/user');
const { Registration, LoginValidation } = require('../validation');

const Register = async (req, res) => { 
        //validate
        const {error} = await Registration(req.body);
        if(error) return res.status(400).json(error.details[0].message);

        //email already exists
        const emailExists = await User.findOne({email: req.body.email});
        if(emailExists) return res.status(200).json("Email already exists");

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
            repeat_password: hashPassword,
            dateOfBirth: req.body.dateOfBirth,
        })
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const Login =  async (req, res) => {
    //validate
    const { error } = await LoginValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message);

    //check user
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json("Email dose not found");

    //password checking
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).json("Incorrect Password");

    const { password, ...others } = user._doc;
    try{
        res.status(200).json(others);
    } catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = { Register, Login }