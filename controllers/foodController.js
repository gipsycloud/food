const foodModel = require('../models/foodModel');
const orderModel = require('../models/orderModel');
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

// order the food
const placeOrderController = async (req, res) => {
  try {
    const { cart } = req.body;
    console.log(req.body);
    if (!cart) {
      return res.status(500).send({
        success: false,
        message: "Cart and payment information are required"
      })
    };
    // calculate
    let totalprice = 0;
    cart.map((i) => {
      totalprice += i.price;
    });
    const newOrder = new orderModel({
      foods: cart,
      payment: totalprice,
      buyer: req.body.id,   // from middlware line no 14
    });
    await newOrder.save();
    res.status(200).send({
      success: true,
      message: "Order placed successfully",
      order: newOrder
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to place order");
  }
}

// change order status
const orderStatusController = async (req, res) => {
  try {
    const orderId = req.params.id;
    console.log(orderId);

    if (!orderId) {
      return res.status(404).send("No order id provided");
    }
    const { status } = req.body;
    const order = await orderModel.findByIdAndUpdate(orderId, { status });
    res.status(200).send({
      success: true,
      message: "Order status updated successfully",
      order
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to change order status");
  }
}
module.exports = {
  createFoodController,
  getAllFoodController,
  getSingleFoodController,
  getFoodByRestaurantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController
};