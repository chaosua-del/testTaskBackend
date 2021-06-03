const express = require("express");
const compression = require("compression");
const volleyball = require("volleyball");
const db = require("./db");
const cors = require("cors");

const router = require("./routes");

const app = express();

db.on("error", () => {
  console.error("Failed connecting to database");
});

db.once("open", () => {
  console.log("Database successfully connected");
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(compression());
app.use(volleyball);

app.use("/api", router);

module.exports = app;
