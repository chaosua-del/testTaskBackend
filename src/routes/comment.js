const express = require("express");

const { Comment } = require("../schemas");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      productId: req.body.productId,
      text: req.body.text,
      createdAt: Date.now(),
    });
    res.json(newComment);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const Comments = await Comment.find({
      productId: req.params.id,
    }).exec();
    res.json(Comments);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = await Comment.findOneAndDelete(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
