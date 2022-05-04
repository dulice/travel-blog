const Post = require('../models/post');

const CreatePost =  async (req, res) => {
    const newPost = await new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const UpdatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.email === req.body.email) {
            try {
                const updatPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },{new: true});
                res.status(200).json(updatPost);
            }catch(err) {
                res.status(500).json({message: err.message});
            }
        }
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const DeletePost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(req.params.id);
                res.json(200).json("Delete Successfully")
            } catch (err) {
                res.status(500).json({message: err.message})
            }
        } else {
            res.status(401).json("You can only delete your post.")
        }       
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

const SinglePost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch (err) {
        res.status(500).send({message: err.message});
    }
}

const AllPost = async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = { CreatePost, UpdatePost, DeletePost, SinglePost, AllPost}