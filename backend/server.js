import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.get("/", (req, res) => {
      res.send("Backend working");
    });

    app.listen(5000, () => {
      console.log("Running on port 5000");
    });
  })
  .catch(console.error);