import { useState, useEffect } from "react";
import "./CartPage.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    const res = await fetch('http://localhost:3000/api/cart');
    const data = await res.json();
    setCartItems(data);
  }

  async function increaseQty(item) {
    await fetch('http://localhost:3000/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: item.productId })
    });
    fetchCart();
  }

  async function decreaseQty(item) {
    if (item.quantity === 1) return removeItem(item.id);
    await fetch(`http://localhost:3000/api/cart/${item.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: item.quantity - 1 })
    });
    fetchCart();
  }

  async function removeItem(id) {
    await fetch(`http://localhost:3000/api/cart/${id}`, { method: 'DELETE' });
    fetchCart();
  }

  const totalPrice = cartItems.reduce((total, item) => total + Number(item.Product.price) * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 && <p style={{ color: '#9ca3af' }}>Your cart is empty.</p>}

        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.Product.imageUrl} alt={item.Product.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h2 className="cart-item-name">{item.Product.name}</h2>
                <p className="cart-item-subtitle">Luxury jewelry collection</p>
                <p className="cart-item-price">${item.Product.price}</p>
              </div>
              <div className="cart-item-controls">
                <button className="qty-btn-minus" onClick={() => decreaseQty(item)}>-</button>
                <span className="qty-number">{item.quantity}</span>
                <button className="qty-btn-plus" onClick={() => increaseQty(item)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div>
              <h2 className="cart-total">Total: ${totalPrice.toFixed(2)}</h2>
              <p className="cart-shipping">Shipping & taxes calculated at checkout</p>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}