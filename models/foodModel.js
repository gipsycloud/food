const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Food title is required'],
    trim: true,
    maxlength: 50
  },
  foodTags: {
    type: String,
  },
  category: {
    type: String
  },
  description: {
    type: String,
    trim: true,
    maxlength: 200
  },
  price: {
    type: Number,
    required: [true, 'Food price is required'],
    min: 0
  },
  imageurl: {
    type: String,
    required: [true, 'Food image is required'],
    default: "https://w7.pngwing.com/pngs/686/527/png-transparent-fast-food-hamburger-sushi-pizza-fast-food-food-breakfast-fast-food-restaurant-thumbnail.png"
  },
  code: {
    type: String
  },
  isavailable: {
    type: Boolean,
    default: true
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  ratingcount: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);