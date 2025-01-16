const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createCategoryController, getAllCategoryController, updateCategoryController, deleteCategoryController } = require('../controllers/categoryController');
const router = express.Router();

router.get('/getall', getAllCategoryController);                              // get all categories
router.post('/create', authMiddleware, createCategoryController);             // create categories
router.put('/update/:id', authMiddleware, updateCategoryController);          // update category
router.delete('/delete/:id', authMiddleware, deleteCategoryController);           // delete category

module.exports = router;