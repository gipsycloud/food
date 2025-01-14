const express = require('express');
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// routes
// Get user routes
router.get('/users', authMiddleware, getUserController);

// update user routes
router.put('/update', authMiddleware, updateUserController);

// password update
router.post('/updatePassword', authMiddleware, updatePasswordController);

// reset password
router.post('/resetPassword', authMiddleware, resetPasswordController);

// delete user routes
router.delete('/deleteUser/:id', authMiddleware, deleteProfileController);

module.exports = router;