const express = require('express');
const { getUserController, updateUserController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// routes
// Get user routes
router.get('/users', authMiddleware, getUserController);

// update user routes
router.put('/update', authMiddleware, updateUserController);

module.exports = router;