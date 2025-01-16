const jwt = require("jsonwebtoken");

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 60,
  });
};

module.exports = generateToken;
