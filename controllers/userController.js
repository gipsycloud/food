const userModel = require('../models/userModel');
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
module.exports = { getUserController, updateUserController };