const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    dateOfBirth: {
        type: String
    },
    profile: {
        type: String,
        default: ''
    }
},{timestamps: true});

const user = mongoose.model('user', userSchema);
module.exports = user;