import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import { notFound, errorHandler } from "./Middleware/error_middlewares.js";
import taskRoutes from "./Routes/task_routes.js";
import "./Models/association.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", taskRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
