import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: String,
  products: [
    {
      productId: String,
      quantity: Number,
    },
  ],
  totalPrice: Number,
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);