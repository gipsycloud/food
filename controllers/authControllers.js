const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require('jsonwebtoken');

const registerController = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, address, phone, answer } = req.body;
    if (!username || !email || !password || !address || !phone || !answer) {
      return res.status(400).send("All input is required");
    }
    // check if user already exists
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(400).send("User already exists");
    }
    // hash the password
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    // create a new user
    const user = new userModel({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    });
    await user.save();
    return res.status(200).send("Successfully created");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// login controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("All input is required");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send("User Not Found !!");
    }
    // check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send({ success: false, message: "Invalid Password" });
    }
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    user.password = undefined;
    return res.status(200).send({ success: true, user, token, message: "Successfully logged in" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { registerController, loginController };