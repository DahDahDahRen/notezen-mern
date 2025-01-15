const jwt = require("jsonwebtoken");

const generateToken = (email, userId) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 1,
  });
};

module.exports = generateToken;
