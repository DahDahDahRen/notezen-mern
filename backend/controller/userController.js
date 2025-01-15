const User = require("../model/UserModel");
const generateToken = require("../utils/generateToken");
const { createCustomError } = require("../utils/customError");

//! Action: POST
//! Create new user
const registerNewUserController = async (req, res, next) => {
  try {
    // Check if email or password is empty
    if (!req.body.email || !req.body.password) {
      throw createCustomError("Email or password is empty", 404);
    }

    // Check if email already registered
    const existingUser = await User.findOne({ email: req.body.email });

    // Send a notice to user that the email is already taken
    if (existingUser) {
      throw createCustomError("Email is already exist.", 404);
    }

    // Register new user
    const user = await User.create(req.body);

    // Generate a new jwt token
    const token = generateToken(user._id, user.email);

    // Return the user credintials except the pasword
    // The payload also must includes the jwt token
    res
      .json({
        users: {
          userId: user._id,
          userEmail: user.email,
          token: token,
        },
        success: true,
      })
      .status(200);
  } catch (error) {
    next(error);
  }
};

//! Action: GET
//! User only route
//! Login to the server
const loginUserController = async (req, res, next) => {
  try {
    if (req.body.email || req.body.password) {
      throw createCustomError("Email or password is empty!", 404);
    }
  } catch (error) {
    next(error);
  }
};

//! Action: GET
//! Admin only route
//! Get all user
const getAllUsersController = async (req, res, next) => {
  try {
    const users = await User.find({});

    res.json(users).status(202);
  } catch (error) {
    next(error);
  }
};

//! Action: DELETE
//! Admin only route
//! Delete all users
const deleteAllUserController = async (req, res, next) => {
  try {
    await User.deleteMany({});

    res.json({ message: "Deleted all users" }).status(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerNewUserController,
  getAllUsersController,
  deleteAllUserController,
};
