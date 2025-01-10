const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, address, phone, userType, profile } = req.body;
    if (!username || !email || !password || !address || !phone) {
      return res.status(400).send("All input is required");
    }
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(400).send("User already exists");
    }
    // create a new user
    const user = new userModel({
      username,
      email,
      password,
      phone,
      address,
      userType,
      profile,
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
    const user = await userModel.findOne({ email: email, password: password });
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }
    return res.status(200).send({ success: true, user, message: "Successfully logged in" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { registerController, loginController };