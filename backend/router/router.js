const express = require("express");
const router = express.Router();
const {
  getNoteController,
  createNoteController,
  deleteNoteController,
  updateNoteController,
} = require("../controller/notesController");
const {
  registerNewUserController,
  getAllUsersController,
  deleteAllUserController,
  loginUserController,
} = require("../controller/userController");
const protectedRoute = require("../middleware/protectedRoute");

//! Notes RESTful Routes
router.get("/", getNoteController).post("/", createNoteController);
router
  .delete("/note/:id", deleteNoteController)
  .patch("/note/:id", updateNoteController);

//! User RESTful Routes
router.post("/user/register", registerNewUserController);
router.get("/user/all", protectedRoute, getAllUsersController);
router.delete("/user/delete", deleteAllUserController);
router.post("/user/login", loginUserController);

module.exports = router;
