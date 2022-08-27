import express from "express";
const router = express.Router();
import {
  authUser,
  getProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddles.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getProfile);

export default router;
