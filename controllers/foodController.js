const foodModel = require('../models/foodModel');
const { findById } = require('../models/userModel');
const createFoodController = async (req, res) => {
  try {
    const {
      title,
      foodTags,
      category,
      description,
      price,
      imgurl,
      code,
      isavailable,
      restaurant,
      rating,
      ratingcount
    } = req.body;
    if (!title || !description || !price || !restaurant) {
      return res.status(400).send({
        success: false,
        message: "Title, description, price, image URL, and restaurant are required"
      });
    }
    const newFood = new foodModel({
      title,
      foodTags,
      category,
      description,
      price,
      imgurl,
      code,
      isavailable,
      restaurant,
      rating,
      ratingcount
    });
    await newFood.save();
    res.status(200).send({
      success: true,
      message: "Food created successfully",
      newFood: newFood
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to create food");
  }
};

const getAllFoodController = async (req, res) => {
  try {
    const foods = await foodModel.find();
    if (!foods) {
      return res.status(404).send("No foods found");
    }
    res.status(200).send({
      success: true,
      totalFood: foods.length,
      foods
    });
  } catch {
    console.error(err.message);
    res.status(500).send("Failed to get all foods");
  }
};

const getSingleFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    console.log(foodId) //
    if (!foodId) {
      return res.status(404).send("No food found");
    }
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).send("No food found");
    }
    res.status(200).send({
      success: true,
      food
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to get food by id");
  }
};

// get food by restaurant id
const getFoodByRestaurantController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    console.log(restaurantId);
    if (!restaurantId) {
      return res.status(400).send("No restaurant id provided");
    }
    const foods = await foodModel.find({ restaurant: restaurantId });
    if (!foods) {
      return res.status(404).send("No foods found for this restaurant");
    }
    res.status(200).send({
      success: true,
      totalFood: foods.length,
      foods
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to get foods by restaurant id");
  }
};

// update food
const updateFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    console.log(req.body);
    if (!foodId) {
      return res.status(404).send("No food id provided");
    }
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).send("Food not found");
    }
    const foodData = {
      title,
      foodTags,
      category,
      description,
      price,
      imgurl,
      code,
      isavailable,
      restaurant,
      rating,
      ratingcount
    } = req.body;
    const updatedFood = await foodModel.findByIdAndUpdate(foodId, foodData, { new: true });
    res.status(200).send({
      success: true,
      message: "Food updated successfully",
      food: updatedFood
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to update food");
  }
};

const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send("No food id provided");
    }
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).send("Food not found");
    }
    await foodModel.findByIdAndDelete(foodId);
    res.status(200).send({
      success: true,
      message: "Food deleted successfully"
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to delete food");
  }
};

module.exports = {
  createFoodController,
  getAllFoodController,
  getSingleFoodController,
  getFoodByRestaurantController,
  updateFoodController,
  deleteFoodController
};