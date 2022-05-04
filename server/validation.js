const Joi = require('joi');

const Registration = (data) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required().email().min(6),
        password: Joi.string().required().min(5),
        repeat_password: Joi.ref('password'),
        dateOfBirth: Joi.string()
    })
    .with('password', 'repeat_password');
    return schema.validate(data);
}

const LoginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email().min(6),
        password: Joi.string().required().min(5)
    })
    return schema.validate(data);
}

module.exports = { Registration, LoginValidation }