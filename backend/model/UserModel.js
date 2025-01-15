const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provdes a email address."],
    },
    password: {
      type: String,
      required: [true, "Please provides a password."],
    },
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notes" }],
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(
    this.password,
    parseInt(process.env.SALT_ROUNDS)
  );
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
