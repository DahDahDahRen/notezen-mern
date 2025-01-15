const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Note Title",
      required: true,
    },
    tags: [],
    date: {
      type: Date,
      default: Date.now(),
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note;
