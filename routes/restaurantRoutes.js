const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllRestaurantController, createRestaurantController } = require('../controllers/restaurantController');
const router = express.Router();

// routes
// get all restaurant
router.get('/getall', authMiddleware, getAllRestaurantController);

// create restauant routes || post
router.post('/create', authMiddleware, createRestaurantController);

module.exports = router;