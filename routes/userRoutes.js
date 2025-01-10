const express = require('express');
const { getUserController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// routes
// Get user routes
router.get('/users', authMiddleware, getUserController);

module.exports = router;