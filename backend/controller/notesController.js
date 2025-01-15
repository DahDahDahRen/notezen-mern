//! Action: GET
//! Get all notes documents from DB
const getNoteController = (req, res, next) => {
  try {
    res.json({ data: [], message: "Hello World", statusCode: 202, ok: true });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNoteController,
};
