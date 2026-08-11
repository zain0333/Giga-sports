import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {
  const [search, setSearch] = useState("");

  // Search by product name OR category
  const filteredProducts = products.filter((product) => {
    const searchText = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="container py-4">
      {/* Page Title */}
      <h1 className="text-center mb-4">Our Sports Products</h1>

      {/* Search Box */}
      <div className="search-container mb-4">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search sports products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Search Result */}
      {search && (
        <p className="text-center mb-4">
          Showing results for: <strong>{search}</strong>
        </p>
      )}

      {/* Products */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>No products found 😔</h3>

            <p>Try searching for another product or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
