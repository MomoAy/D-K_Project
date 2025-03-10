import express from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../Controllers/user_controller.js";
import authMiddleware from "../Middleware/auth_middlewares.js";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.route("/profile").get(authMiddleware, getProfile);

router.post("/logout", authMiddleware, logout);

export default router;
