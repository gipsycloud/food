const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Restaurant title is required"],
    trim: true,
    maxlength: 50
  },
  imageurl: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?([\da-z.-]+\.[a-z]{2,}\.?\/).*\.(jpg|png|gif|webp)$/i.test(v);
      },
      message: "Please provide a valid image URL"
    }
  },
  food: { type: Array },
  time: { type: String },
  pickup: {
    type: Boolean,
    default: true
  },
  pickupTime: { type: String },
  delivery: {
    type: Boolean,
    default: true
  },
  isopen: {
    type: Boolean,
    default: true
  },
  logourl: {
    type: String
  },
  rating: {
    type: Number,
    default: 1,
    min: 1,
    max: 5
  },
  ratingCount: { type: String },
  code: { type: String },
  coords: {
    id: { type: String },
    latitude: { type: Number },
    latitudeDelta: { type: Number },
    longitude: { type: Number },
    longitudeDelta: { type: Number },
    address: { type: String }
  },
  customerRating: {
    type: Number,
    min: 1,
    max: 5
  },
  reviewCount: {
    type: Number,
    min: 0,
    max: 100
  }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);