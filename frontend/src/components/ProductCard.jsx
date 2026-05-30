import './ProductCard.css';

function ProductCard({ product }) {
  const { name, description, price, imageUrl, rating } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <p className="rating">⭐ {rating}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;