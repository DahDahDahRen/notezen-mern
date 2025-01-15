class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.status = statusCode;
  }
}

const createCustomError = (message, statusCode) => {
  return new CreateCustomError(message, statusCode);
};

module.exports = {
  CustomError,
  createCustomError,
};
