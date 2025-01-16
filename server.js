const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

// dotenv configuration
dotenv.config();

//connection
const connectDb = require('./config/db');
connectDb();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/auth', require('./routes/auth_Routes'));
app.use('/api/v1/user', require('./routes/userRoutes')); // 
app.use('/api/v1/restaurant', require('./routes/restaurantRoutes')); //
app.use('/api/v1/category', require('./routes/categoryRoutes'));
app.use('/api/v1/food', require('./routes/foodRoutes'));

// route
app.get('/', (req, res) => {
  return res.status(200).send("Hello World");
});

var ProgressBar = require('./progressbar.js');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});