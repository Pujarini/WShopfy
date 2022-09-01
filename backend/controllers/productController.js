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

const deleteProduct = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(401);
    throw new Error(`Product not found`);
  }
});
const createProduct = expressAsyncHandler(async (req, res) => {
  const product = new Product({
    name: "sample  name",
    description: "sample desc",
    brand: "sample",
    category: "category",
    price: 9,
    numReviews: 3,
    image: "/images/airpods.jpg",
    user: req.user._id,
    countInStock: 10,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

const updateProduct = expressAsyncHandler(async (req, res) => {
  const { name, description, brand, category, price, image, countInStock } =
    req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    const updateProduct = await product.save();
    res.json(updateProduct);
  } else {
    res.json(404);
    throw new Error("Product was found");
  }
});

export {
  getProducts,
  getProductsById,
  deleteProduct,
  createProduct,
  updateProduct,
};
