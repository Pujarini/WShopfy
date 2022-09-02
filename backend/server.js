import express from "express";
import env from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import path from "path";

env.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads"))); //make a file static

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
