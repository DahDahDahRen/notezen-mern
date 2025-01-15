const express = require("express");
const router = express.Router();
const { getNoteController } = require("../controller/notesController");

//! Main Router
router.get("/", getNoteController);

module.exports = router;
