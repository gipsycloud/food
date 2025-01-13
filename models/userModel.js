const mongoose = require('mongoose');

// schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32,
    require: [true, 'Username is required'],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    require: [true, 'Password is required'],
  },
  phone: {
    type: String,
    require: [true, 'Phone number is required'],
  },
  address: {
    type: String,
  },
  userType: {
    type: String,
    default: 'client',
    enum: ['client', 'admin', 'vendor', 'driver'],
  },
  profile: {
    type: String,
    default: '../../public/profile.webp',
  },
  answer: {
    type: String,
    required: [true, 'Answer is required'],
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);