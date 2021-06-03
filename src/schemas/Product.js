const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  productName: {
    type: String,
  },
  count: {
    type: Number,
  },
  color: {
    type: String,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  width: {
    type: Number,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
