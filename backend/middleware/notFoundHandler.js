const notFoundHandler = (req, res) => {
  res.json({ msg: "Resources not found" }).status(404);
};

module.exports = notFoundHandler;
