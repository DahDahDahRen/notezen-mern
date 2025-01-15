const { CustomError } = require("../utils/customError");

const customErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.json(err).status(err.statuCode);
  }

  res.json({ message: "Something went wrong!" }).status(400);
};

module.exports = customErrorHandler;
