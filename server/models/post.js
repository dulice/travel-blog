const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    username: {
        type: String, 
    },
    email: {
        type: String, 
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
    }
},{timestamps: true});

const post = mongoose.model('post', PostSchema);
module.exports = post;