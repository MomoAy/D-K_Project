import express from "express";
import {
  getAllTasksPerUser,
  addTask,
  updateTask,
  deleteTask,
  getTask,
  updateStatusTask,
} from "../Controllers/task_controller.js";
import authMiddleware from "../Middleware/auth_middlewares.js";

const router = express.Router();

router.route("/tasks")
  .post(authMiddleware, addTask)
  .get(authMiddleware, getAllTasksPerUser)

router
  .route("/tasks/:id")
  .get(authMiddleware, getTask)
  .put(authMiddleware, updateTask)
  .delete(authMiddleware, deleteTask);

router.put("/updateStatusTask/:id", authMiddleware, updateStatusTask);

export default router;
