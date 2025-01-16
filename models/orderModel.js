const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  foods: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  }],
  payment: {},
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);