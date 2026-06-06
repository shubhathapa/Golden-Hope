import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    fetch(`https://golden-hope.onrender.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  async function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      await fetch('https://golden-hope.onrender.com/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: Number(id) })
      });
    }
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  }

  if (!product) return <p className="pp-loading">Loading...</p>;

  return (
    <div className="pp-page">
      {toast && <div className="toast">✦ Added to Cart!</div>}

      <button className="pp-back" onClick={() => navigate('/products')}>
        ← Back to results
      </button>

      <div className="pp-inner">
        <div className="pp-img-section">
          <img src={product.imageUrl} alt={product.name} className="pp-main-img" />
        </div>

        <div className="pp-info">
          <p className="pp-rating">{'⭐'.repeat(Math.round(product.rating))} {product.rating}</p>
          <h1 className="pp-name">{product.name}</h1>
          <p className="pp-price">${product.price}</p>
          <p className="pp-desc">{product.description}</p>

          <div className="pp-perks">
            <p>✦ Free shipping on orders over $50</p>
            <p>✦ Returns & exchanges accepted</p>
            <p>✦ Handcrafted with care</p>
          </div>

          <div className="pp-qty-row">
            <label className="pp-qty-label">Quantity</label>
            <select
              className="pp-qty-select"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
            >
              {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          <button className="pp-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;