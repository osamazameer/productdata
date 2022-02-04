const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
    maxlength: [50, "Title cannot be more than 40 characters"],
  },
  category: {
    type: String,
    trim: true,
    required: [true, "Please add a category"],
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    maxlength: [200, "Description cannot be more than 200 characters"],
  },
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
