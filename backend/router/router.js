const express = require("express");
const router = express.Router();
const {
  getNoteController,
  createNoteController,
  deleteNoteController,
  updateNoteController,
} = require("../controller/notesController");

//! Main Router
router.get("/", getNoteController).post("/", createNoteController);
router
  .delete("/note/:id", deleteNoteController)
  .patch("/note/:id", updateNoteController);

module.exports = router;
