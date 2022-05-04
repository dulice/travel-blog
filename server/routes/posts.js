const router = require('express').Router();
const { CreatePost, UpdatePost, DeletePost, SinglePost, AllPost } = require('../controllers/post')

router.post('/', CreatePost);
router.put('/:id', UpdatePost);
router.delete('/:id', DeletePost);
router.get('/:id', SinglePost);
router.get('/', AllPost);
module.exports = router;