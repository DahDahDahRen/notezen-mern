const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./database/connectDB");
const notFoundHandler = require("./middleware/notFoundHandler");
const customErrorHandler = require("./middleware/customErrorHandler");
const router = require("./router/router");

//! App level middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//! RESTful Router
app.use("/v1/notezen", router);

//! Custome error handler
app.use(customErrorHandler);

//! Handler for non-existing route
app.use(notFoundHandler);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    app.listen(process.env.PORT, () => {
      console.log("Server is running!");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
