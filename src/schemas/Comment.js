const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  productId: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
