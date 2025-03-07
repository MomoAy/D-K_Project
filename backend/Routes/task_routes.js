import express from "express";
import {
  getAllTasksPerUser,
  addTask,
  updateTask,
  deleteTask,
  getTask,
  updateStatusTask,
} from "../Controllers/task_controller.js";

const router = express.Router();

router.get("/all-user-tasks/:id", getAllTasksPerUser);

router.post("/tasks", addTask);

router.route("/tasks/:id").get(getTask).put(updateTask).delete(deleteTask);

router.put("/updateStatusTask/:id", updateStatusTask);

export default router;
