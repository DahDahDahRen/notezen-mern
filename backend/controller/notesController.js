const { createCustomError } = require("../utils/customError");
const Note = require("../model/NoteModel");

//! Action: GET
//! Get all notes documents from DB
const getNoteController = async (req, res, next) => {
  try {
    const notes = await Note.find({});

    console.log(notes);

    res.json({
      results: notes,
      statusCode: 202,
      ok: true,
    });
  } catch (error) {
    next(error);
  }
};

//! Action: POST
//! Create new note document
const createNoteController = async (req, res, next) => {
  try {
    const note = await Note.create(req.body);

    if (!note) {
      throw createCustomError(
        "Failed to create the note, Please try again later.",
        404
      );
    }

    res.json(note).status(202);
  } catch (error) {
    next(error);
  }
};

//! Action: DELETE
//! Delete note document
const deleteNoteController = async (req, res, next) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id, { new: true });

    if (!note) {
      throw createCustomError("Note does not exist!", 404);
    }

    res.json({ id: note._id }).status(202);
  } catch (error) {
    next(error);
  }
};

//! Action: UPDATE
//! Update a note document
const updateNoteController = async (req, res, next) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!note) {
      throw createCustomError("Note does not exist!", 404);
    }

    res.json(note).status(202);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNoteController,
  createNoteController,
  deleteNoteController,
  updateNoteController,
};
