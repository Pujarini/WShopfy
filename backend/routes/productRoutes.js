import express from "express";
const router = express.Router();
import {
  deleteOrder,
  getProducts,
  getProductsById,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddles.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById).delete(protect, admin, deleteOrder);

export default router;
