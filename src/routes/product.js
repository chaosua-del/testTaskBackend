const express = require("express");

const { Product } = require("../schemas");
const { Comment } = require("../schemas");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create({
      imageUrl: req.body.imageUrl,
      productName: req.body.productName,
      count: req.body.count,
      color: req.body.color,
      width: req.body.width,
      height: req.body.height,
      weight: req.body.weight,
      description: req.body.description,
    });
    res.json(newProduct);
    console.log("hello");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = await Product.findOneAndDelete(req.params.id);
    await Comment.deleteMany({
      productId: req.params.id,
    });
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const response = await Product.findByIdAndUpdate(req.params.id, {
      imageUrl: req.body.imageUrl,
      productName: req.body.productName,
      count: req.body.count,
      color: req.body.color,
      width: req.body.width,
      height: req.body.height,
      weight: req.body.weight,
      description: req.body.description,
    });
    res.json(response);
  } catch (error) {
    console.dir(error, { depth: null });
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const Products = await Product.find().exec();
    res.json(Products);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).exec();
    res.json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
