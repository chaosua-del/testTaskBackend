const express = require("express");

const router = express.Router();

const product = require("./product");
const comment = require("./comment");

router.use("/product", product);
router.use("/comment", comment);

module.exports = router;
