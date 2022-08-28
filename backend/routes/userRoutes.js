import express from "express";
const router = express.Router();
import {
  authUser,
  getProfile,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddles.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);

export default router;
