const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    maxlength: [100],
  },
  email: {
    type: String,
    required: true,
    default: 0,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
