const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createCategoryController, getAllCategoryController } = require('../controllers/categoryController');
const router = express.Router();

// get all categories
router.get('/getall', getAllCategoryController);
// create categories
router.post('/create', authMiddleware, createCategoryController);

module.exports = router;