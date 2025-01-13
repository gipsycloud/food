const userModel = require('../models/userModel');
const bcrypt = require("bcryptjs");
// get user information
const getUserController = async (req, res, next) => {
  try {
    // get user
    const user = await userModel.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send({
      success: true,
      user
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      success: false,
      message: "Failed to get user information",
      error: err
    });
  }
};

// update user
const updateUserController = async (req, res, next) => {
  try {
    const user = await userModel.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found"
      });
    }
    // update user info
    // user.set(req.body);
    const { username, address, phone } = req.body;
    if (username) user.username = username;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    await user.save();
    res.status(200).send({
      success: true,
      message: "User updated successfully"
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      success: false,
      message: "Failed to update user",
      error: err
    });
  }
}

// reset password
const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body
    if (!email || !newPassword || !answer) {
      return res.status(400).send({
        success: false,
        message: "All input is required"
      });
    }
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found"
      });
    }
    // hash the new password
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Password reset successfully",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      success: false,
      message: "Failed to reset password",
      error: err
    });
  }
};

module.exports = { getUserController, updateUserController, resetPasswordController };