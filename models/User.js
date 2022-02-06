const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
    maxlength: [100],
  },
  password: {
    type: String,
    trim: true,
    required: [true],
    maxlength: [100],
  },
  email: {
    type: String,
    required: true,
    default: 0,
  },
  role: {
    type: String,
    maxlength: [200],
  },
});

module.exports =
  mongoose.models.User || mongoose.model("User", UserSchema);
