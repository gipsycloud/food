const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllRestaurantController, createRestaurantController, getRestaurantByIdController } = require('../controllers/restaurantController');
const router = express.Router();

// routes
// get all restaurant
router.get('/getall', getAllRestaurantController);

// get restaurant by id
router.get('/get/:id', getRestaurantByIdController);

// create restauant routes || post
router.post('/create', authMiddleware, createRestaurantController);

module.exports = router;