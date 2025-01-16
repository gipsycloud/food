const express = require('express');
const { registerController, loginController } = require('../controllers/authControllers');
const router = express.Router();

router.post('/register', registerController);             // register | post
router.post('/login', loginController);                   // login | post

module.exports = router;