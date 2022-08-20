import express from "express";
import env from "dotenv";
import products from "./data/products.js";
import connectDB from "./config/db.js";

env.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(`server is running ${process.env.NODE_ENV} mode at ${PORT} bro!`)
);
