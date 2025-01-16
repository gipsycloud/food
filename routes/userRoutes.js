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
router.get('/users', authMiddleware, getUserController);                                // Get user routes
router.put('/update', authMiddleware, updateUserController);                            // update user routes
router.post('/updatePassword', authMiddleware, updatePasswordController);               // password update
router.post('/resetPassword', authMiddleware, resetPasswordController);                 // reset password
router.delete('/deleteUser/:id', authMiddleware, deleteProfileController);              // delete user routes

module.exports = router;