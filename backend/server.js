import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import { notFound, errorHandler } from "./Middleware/error_middlewares.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
