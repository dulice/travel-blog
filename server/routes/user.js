const router = require('express').Router();
const bcrypt = require('bcrypt');
const { updateUser, deleteUser, getUser } = require('../controllers/user');

router.put('/:id', updateUser )
router.delete('/:id', deleteUser)
router.get('/:id', getUser );

module.exports = router;