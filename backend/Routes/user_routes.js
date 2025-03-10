import express from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../Controllers/user_controller.js";
import authMiddleware from "../Middleware/auth_middlewares.js";
// import { testAi } from "../Controllers/ai_controllers.js";

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.route("/profile").get(authMiddleware, getProfile);

router.post("/logout", authMiddleware, logout);

// router.get("/test", testAi);

export default router;
