import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const { id, name, description, price, imageUrl, rating } = product;
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  async function handleAddToCart(e) {
    e.stopPropagation(); // 防止点按钮也跳转
    try {
      await fetch('https://golden-hope.onrender.com/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: id })
      });
      setToast(true);
      setTimeout(() => setToast(false), 2500);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      {toast && <div className="toast">✦ Added to Cart!</div>}
      <img src={imageUrl} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <p className="rating">⭐ {rating}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;