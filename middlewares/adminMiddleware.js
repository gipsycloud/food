// const JWT = require('jsonwebtoken');

const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findOne(req.body.id);
    console.log(user)
    if (user.userType !== "admin") {
      return res.status(401).send({
        message: "Only admin access is allowed",
        success: false
      });
    } else {
      next();
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      success: false,
      message: "Failed to authenticate user",
      err,
    });
  }
}