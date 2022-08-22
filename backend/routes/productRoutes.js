import express from "express";
const router = express.Router();
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default router;
