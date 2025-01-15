const { CustomError } = require("../utils/customError");

const customErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res
      .json({ message: err.message, statusCode: err.statusCode })
      .status(err.statusCode);
  }

  res.json({ message: "Something went wrong!" }).status(400);
};

module.exports = customErrorHandler;
