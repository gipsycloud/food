const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'category title is required']
  },
  imgurl: {
    type: String,
    required: [true, 'category image is required'],
    default: "https://c8.alamy.com/comp/2HTCGBD/restaurant-logo-template-on-letter-s-letter-s-restaurant-logo-sign-design-2HTCGBD.jpg"
  },
}, { timestamps: true })

// export module
module.exports = mongoose.model('Category', categorySchema);