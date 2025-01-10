// get user information
const getUserController = async (req, res, next) => {
  res.status(200).send({ message: "User information " });
};

module.exports = { getUserController };