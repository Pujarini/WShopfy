import express from "express";
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsById,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddles.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductsById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
