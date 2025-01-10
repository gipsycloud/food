const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    // get token
    const token = req.headers["authorization"].split(" ")[0];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(403).send({
          success: false,
          message: "Access denied"
        })
      } else {
        req.body.id = decode.id;
        next();
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(401).send({
      success: false,
      message: "Token is not valid",
      err
    });
  };
};