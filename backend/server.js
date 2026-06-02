import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));
  app.use("/api/orders", orderRoutes);
  app.get("/", (req, res) => {
  res.send("Backend working");
});

app.listen(5000, () => console.log("Running on port 5000"));