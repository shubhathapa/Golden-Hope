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
  timestamps: true, 
});

export default mongoose.model("Order", orderSchema);