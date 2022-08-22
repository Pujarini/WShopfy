import express from "express";
import env from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

env.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(
    `server is running ${process.env.NODE_ENV} mode at ${PORT} bro!`.blue
      .underline
  )
);
