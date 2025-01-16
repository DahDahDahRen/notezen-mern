const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

const protectedRoute = async (req, res, next) => {
  let token;

  // Check header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get Token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Get user with token id and excluded the password
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);

      res.json({ message: "The user is not authorized!" }).status(404);
    }
  }

  // No token
  if (!token) {
    res.json({ message: "The user is not authorized!" }).status(401);
  }
};

module.exports = protectedRoute;
