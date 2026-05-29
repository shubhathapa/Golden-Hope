import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// routes
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/orders", orderRoutes);

// test route (optional but helpful)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// connect to MongoDB
console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {serverSelectionTimeoutMS: 5000,})
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => {
      console.log("Backend running on port 5000");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });