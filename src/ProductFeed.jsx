import { products } from "./data/product";

function ProductFeed() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "40px"
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: "220px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <img
            src={product.image}
            style={{ width: "100%", borderRadius: "8px" }}
          />

          <h3>{product.name}</h3>
          <p style={{ fontWeight: "bold" }}>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductFeed;