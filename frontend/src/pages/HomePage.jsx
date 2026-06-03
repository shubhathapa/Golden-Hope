import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

function HomePage() {
  const [featured, setFeatured] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => setFeatured(data.slice(0, 3)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home-page">

      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero-content">
        <img src="/golden_hope_logo.svg" alt="Golden Hope" className="home-hero-logo" />
        <p className="home-hero-sub">✦ Handcrafted Chinese Jewelry ✦</p>
        <h1 className="home-hero-title">GOLDEN HOPE</h1>
          <p className="home-hero-desc">
            Timeless elegance rooted in tradition. Discover pieces that carry the spirit of ancient craftsmanship into modern life.
          </p>
          <button className="home-hero-btn" onClick={() => navigate('/products')}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="home-categories">
        <h2 className="home-section-title">Shop by Category</h2>
        <div className="home-category-grid">
          {[
            { label: 'Hair Accessories', emoji: '🌸' },
            { label: 'Necklaces',        emoji: '📿' },
            { label: 'Earrings',         emoji: '✨' },
            { label: 'Bracelets',        emoji: '💛' },
            { label: 'Rings',            emoji: '💍' },
            { label: 'Sets',             emoji: '🎁' },
          ].map(cat => (
            <div key={cat.label} className="home-category-card" onClick={() => navigate('/products')}>
              <span className="home-category-emoji">{cat.emoji}</span>
              <p className="home-category-label">{cat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="home-featured">
        <h2 className="home-section-title">✦ Featured Collection ✦</h2>
        <div className="home-featured-grid">
          {featured.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="home-view-all">
          <button className="home-view-btn" onClick={() => navigate('/products')}>
            View All Products
          </button>
        </div>
      </section>

      {/* Banner */}
      <section className="home-banner">
        <p className="home-banner-text">✦ Free shipping on orders over $50 &nbsp;·&nbsp; Returns & exchanges accepted &nbsp;·&nbsp; Handcrafted with care ✦</p>
      </section>

    </div>
  );
}

export default HomePage;