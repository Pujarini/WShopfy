import express from "express";
const router = express.Router();
import {
  authUser,
  deleteUser,
  getProfile,
  getUsers,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddles.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/:id").delete(protect, admin, deleteUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);

export default router;
