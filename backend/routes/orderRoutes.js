import express from "express";

const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.send("Order API working");
});

export default router;