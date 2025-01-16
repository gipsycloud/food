const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getAllRestaurantController,
  createRestaurantController,
  getRestaurantByIdController,
  deleteRestaurantController } = require('../controllers/restaurantController');
const router = express.Router();

// routes
router.get('/getall', getAllRestaurantController);                               // get all restaurant
router.get('/get/:id', getRestaurantByIdController);                             // get restaurant by id
router.delete('/delete/:id', authMiddleware, deleteRestaurantController);        // delete restaurant
router.post('/create', authMiddleware, createRestaurantController);              // create restauant routes || post

module.exports = router;