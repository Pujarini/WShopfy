import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductsById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

const deleteOrder = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(401);
    throw new Error(`Product not found`);
  }
});

export { getProducts, getProductsById, deleteOrder };
