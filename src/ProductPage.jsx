function ProductPage() {
  return (
    <div
      style={{
        display: "flex",
        gap: "60px",
        padding: "50px",
        maxWidth: "1200px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Product Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600"
          alt="Diamond Necklace"
          style={{
            width: "450px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* Product Information */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Diamond Elegance Necklace
        </h1>

        <p
          style={{
            color: "#c9a227",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          $1,299.99
        </p>

        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          ⭐⭐⭐⭐⭐ (128 Reviews)
        </p>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          Crafted with premium-quality diamonds and 18K gold,
          this elegant necklace is designed to add timeless beauty
          to every occasion. Perfect for weddings, anniversaries,
          and luxury gifting.
        </p>

        <div style={{ marginTop: "25px" }}>
          <h3>Product Details</h3>
          <ul>
            <li>Material: 18K Gold</li>
            <li>Stone: Natural Diamond</li>
            <li>Weight: 8g</li>
            <li>Warranty: Lifetime Cleaning Service</li>
          </ul>
        </div>

        <div style={{ marginTop: "25px" }}>
          <button
            style={{
              padding: "12px 25px",
              marginRight: "15px",
              backgroundColor: "#c9a227",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add to Cart
          </button>

          <button
            style={{
              padding: "12px 25px",
              backgroundColor: "#000",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;