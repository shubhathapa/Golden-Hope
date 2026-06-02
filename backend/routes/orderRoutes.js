import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

console.log("orderRoutes loaded");

// 🧪 TEST ROUTE (temporary)
router.get("/test", async (req, res) => {
  try {
  console.log("TEST ORDER ROUTE HIT");

    const order = await Order.create({
      userId: "test123",
     products: [
       {
        productId: "abc",
        quantity: 1,
        },
      ],
    totalPrice: 100,
    });

    console.log("ORDER CREATED:", order);

    res.json(order);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// CREATE ORDER (real use)
router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL ORDERS
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

export default router;