const mongoose = require('mongoose');

// Connect to the database
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to the database: ${mongoose.connection.host}`);
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
}

module.exports = connectDb;