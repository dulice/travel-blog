const User = require('../models/user');
const Post = require('../models/post');

const updateUser = async(req, res) => {
    if(req.body.userId === req.params.id) {
        if(req.body.password) {
            const salt =await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hashPassword(req.body.password, salt);
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{new: true});
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }else {
        res.status(400).send("You can update your account only")
    }
}

const deleteUser = async (req, res) => {
    if(req.body.userId === req.params.id) {
        const user = await User.findById(req.params.id);
        try {
            await Post.deleteMany({username: user.username});
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete User Successfully");
        }
        catch(err) {
            res.status(400).json("User not found");
        }
    } else {
        res.status(404).json("You can update you account only."); 
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports = {updateUser, deleteUser, getUser};