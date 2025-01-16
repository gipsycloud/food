const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {
  createFoodController,
  getAllFoodController,
  getSingleFoodController,
  getFoodByRestaurantController,
  updateFoodController } = require('../controllers/foodController');
//
router.post('/create', authMiddleware, createFoodController);     //create food with post request
router.get('/getall', getAllFoodController);                      //get all
router.get('/get/:id', getSingleFoodController);                  //get food by id
router.get('/getByRestaurant/:id', getFoodByRestaurantController);                  //get food by id
router.put('/update/:id', authMiddleware, updateFoodController);  //update food by id

module.exports = router;