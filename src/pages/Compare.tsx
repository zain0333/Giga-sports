import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

function Compare() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Select or remove a product
  const handleSelect = (id: number) => {
    setSelectedIds((current) => {
      // Remove if already selected
      if (current.includes(id)) {
        return current.filter((productId) => productId !== id);
      }

      // Maximum 3 products
      if (current.length >= 3) {
        alert("You can compare maximum 3 products.");
        return current;
      }

      return [...current, id];
    });
  };

  // Clear all products
  const clearComparison = () => {
    setSelectedIds([]);
  };

  // Get selected products
  const selectedProducts = products.filter((product) =>
    selectedIds.includes(product.id),
  );

  // Get rating safely
  const getRating = (product: (typeof products)[number]) => {
    const productData = product as typeof product & {
      rating?: number;
    };

    return productData.rating ?? 4.5;
  };

  // Get stock safely
  // Your current Product type does not have stock.
  const getStock = (product: (typeof products)[number]) => {
    const productData = product as typeof product & {
      stock?: number;
    };

    return productData.stock ?? 10;
  };

  // Display stars
  const displayStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return "★".repeat(fullStars) + "☆".repeat(emptyStars);
  };

  // Stock text
  const getStockText = (stock: number) => {
    if (stock <= 0) {
      return "Out of Stock";
    }

    if (stock <= 3) {
      return `Only ${stock} left`;
    }

    return "In Stock";
  };

  return (
    <main className="compare-page">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <section className="compare-header">
        <div className="container">
          <h1>🆚 Compare Products</h1>

          <p>Select 2 or 3 sports products and compare them side-by-side.</p>
        </div>
      </section>

      {/* =========================
          PRODUCT SELECTION
      ========================== */}
      <section className="container py-5">
        <div className="compare-selection-card">
          <div className="selection-heading">
            <div>
              <h2>Select Products</h2>

              <p>Choose up to 3 products to compare.</p>
            </div>

            <span className="compare-count">
              {selectedIds.length}/3 Selected
            </span>
          </div>

          {/* Product Cards */}
          <div className="row g-3">
            {products.map((product) => {
              const isSelected = selectedIds.includes(product.id);

              return (
                <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                  <button
                    type="button"
                    className={`compare-select-card ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => handleSelect(product.id)}
                  >
                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="compare-select-image"
                    />

                    {/* Product Information */}
                    <div className="compare-select-content">
                      <h5>{product.name}</h5>

                      <p>Rs. {product.price.toLocaleString()}</p>
                    </div>

                    {/* Checkbox */}
                    <span
                      className={`compare-checkbox ${
                        isSelected ? "checked" : ""
                      }`}
                    >
                      {isSelected ? "✓" : ""}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Clear Selection */}
          <div className="compare-actions">
            <button
              type="button"
              className="clear-compare-btn"
              onClick={clearComparison}
              disabled={selectedIds.length === 0}
            >
              Clear Selection
            </button>
          </div>
        </div>

        {/* =========================
            NO PRODUCTS
        ========================== */}

        {selectedProducts.length === 0 && (
          <div className="empty-comparison">
            <div className="empty-comparison-icon">🆚</div>

            <h2>No Products Selected</h2>

            <p>Select at least 2 products above to compare them.</p>
          </div>
        )}

        {/* =========================
            ONLY ONE PRODUCT
        ========================== */}

        {selectedProducts.length === 1 && (
          <div className="empty-comparison">
            <div className="empty-comparison-icon">☝️</div>

            <h2>Select One More Product</h2>

            <p>You need at least 2 products to start comparing.</p>
          </div>
        )}

        {/* =========================
            COMPARISON TABLE
        ========================== */}

        {selectedProducts.length >= 2 && (
          <div className="comparison-result">
            {/* Comparison Heading */}
            <div className="comparison-title">
              <div>
                <h2>Product Comparison</h2>

                <p>Compare your selected sports products.</p>
              </div>

              <button
                type="button"
                className="clear-result-btn"
                onClick={clearComparison}
              >
                ✕ Clear
              </button>
            </div>

            {/* Table */}
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                {/* =========================
                    TABLE HEADER
                ========================== */}

                <thead>
                  <tr>
                    <th className="comparison-feature">Feature</th>

                    {selectedProducts.map((product) => (
                      <th key={product.id}>
                        <div className="comparison-product">
                          {/* Remove */}
                          <button
                            type="button"
                            className="remove-product"
                            onClick={() => handleSelect(product.id)}
                            aria-label={`Remove ${product.name}`}
                          >
                            ×
                          </button>

                          {/* Image */}
                          <img src={product.image} alt={product.name} />

                          {/* Name */}
                          <h3>{product.name}</h3>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* =========================
                    TABLE BODY
                ========================== */}

                <tbody>
                  {/* PRICE */}
                  <tr>
                    <td className="comparison-feature">💰 Price</td>

                    {selectedProducts.map((product) => (
                      <td key={product.id}>
                        <strong className="comparison-price">
                          Rs. {product.price.toLocaleString()}
                        </strong>
                      </td>
                    ))}
                  </tr>

                  {/* CATEGORY */}
                  <tr>
                    <td className="comparison-feature">🏷️ Category</td>

                    {selectedProducts.map((product) => (
                      <td key={product.id}>
                        <span className="category-value">
                          {product.category}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* STOCK */}
                  <tr>
                    <td className="comparison-feature">📦 Stock</td>

                    {selectedProducts.map((product) => {
                      // IMPORTANT:
                      // We use getStock() instead of product.stock
                      // because your Product type does not define stock.
                      const stock = getStock(product);

                      return (
                        <td key={product.id}>
                          <span
                            className={`stock-value ${
                              stock <= 0
                                ? "stock-out"
                                : stock <= 3
                                  ? "stock-low"
                                  : "stock-good"
                            }`}
                          >
                            {getStockText(stock)}
                          </span>
                        </td>
                      );
                    })}
                  </tr>

                  {/* RATING */}
                  <tr>
                    <td className="comparison-feature">⭐ Rating</td>

                    {selectedProducts.map((product) => {
                      const rating = getRating(product);

                      return (
                        <td key={product.id}>
                          <div className="comparison-rating">
                            <span className="stars">
                              {displayStars(rating)}
                            </span>

                            <strong>{rating}/5</strong>
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* PRODUCT ID */}
                  <tr>
                    <td className="comparison-feature">🔢 Product ID</td>

                    {selectedProducts.map((product) => (
                      <td key={product.id}>#{product.id}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================
            BACK TO PRODUCTS
        ========================== */}

        <div className="text-center mt-5">
          <Link to="/products" className="back-products-btn">
            ← Back to Products
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Compare;
