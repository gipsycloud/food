const restaurantModel = require("../models/restaurantModel");

const createRestaurantController = async (req, res) => {
  try {
    const {
      title,
      imageurl,
      food,
      time,
      pickup,
      pickupTime,
      delivery,
      isopen,
      logourl,
      rating,
      ratingCount,
      code,
      coords,
      customerRating,
      reviewCount } = req.body;
    // validate
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Title and Coordinates are required"
      });
    }
    const newRestaurant = new restaurantModel({
      title,
      imageurl,
      food,
      time,
      pickup,
      pickupTime,
      delivery,
      isopen,
      logourl,
      rating,
      ratingCount,
      code,
      coords,
      customerRating,
      reviewCount
    });
    await newRestaurant.save();
    res.status(200).send({
      success: true,
      message: "Restaurant created successfully"
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to create restaurant");
    err;
  }
};

// get restaurant
const getAllRestaurantController = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({});
    if (!restaurants) {
      return res.status(404).send("No restaurants found");
    }
    res.status(200).send({
      success: true,
      message: "All Restaurants",
      restaurants
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to get restaurants");
  }
};

// get restaurant by id
const getRestaurantByIdController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(400).send({
        success: false,
        message: "Invalid restaurant id"
      });
    };
    // find restaurant
    const restaurant = await restaurantModel.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "Restaurant not found"
      });
    }
    res.status(200).send({
      success: true,
      message: "Restaurant",
      restaurant
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to get restaurant by id");
  }
};
module.exports = { getAllRestaurantController, getRestaurantByIdController, createRestaurantController };