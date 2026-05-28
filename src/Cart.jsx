import { useState } from "react";

export default function Cart() {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Diamond Ring",
      price: 250,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    },
    {
      id: 2,
      name: "Gold Necklace",
      price: 180,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
    },
  ]);

  // Increase Quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f8f5f0] p-8">

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8">

        {/* Title */}
        <h1 className="text-4xl font-serif font-bold text-[#8b6f47] mb-10">
          Shopping Cart
        </h1>

        {/* Cart Items */}
        <div className="space-y-8">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between gap-6 border-b pb-8"
            >

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-2xl"
              />

              {/* Product Info */}
              <div className="flex-1">

                <h2 className="text-2xl font-semibold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  Luxury jewelry collection
                </p>

                <p className="text-xl font-bold text-[#8b6f47] mt-4">
                  ${item.price}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 text-xl"
                >
                  -
                </button>

                <span className="text-xl font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-10 h-10 rounded-lg bg-[#8b6f47] text-white hover:opacity-90 text-xl"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
              >
                Remove
              </button>

            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-3xl font-bold text-[#8b6f47]">
              Total: ${totalPrice}
            </h2>

            <p className="text-gray-500 mt-2">
              Shipping & taxes calculated at checkout
            </p>
          </div>

          <button className="bg-[#8b6f47] hover:bg-[#735c3a] text-white px-10 py-4 rounded-2xl text-lg shadow-lg">
            Proceed to Checkout
          </button>

        </div>
      </div>
    </div>
  );
}