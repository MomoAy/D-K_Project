import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import { notFound, errorHandler } from "./Middleware/error_middlewares.js";
import taskRoutes from "./Routes/task_routes.js";
import userRoutes from "./Routes/user_routes.js";
import "./Models/association.js";
import cookieParser from "cookie-parser";
// import aiRoutes from "./Routes/ai_routes.js"

dotenv.config();

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: "http://192.168.251.8:31619", // Toutes les origines autorisées
    credentials: true, // Accepter les cookies et headers d'authentification
  })
);


app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", taskRoutes);
app.use("/api/v1", userRoutes);
// app.use("/api/v1", aiRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
