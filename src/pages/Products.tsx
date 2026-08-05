import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  const categories = [
    "All",
    "Cricket",
    "Football",
    "Badminton",
    "Gym Equipment",
    "Shoes",
    "Sports Clothing",
  ];

  return (
    <div className="container mt-4">
      <h1>GIGA SPORTS PRODUCTS</h1>

      {/* Search */}

      <input
        type="text"
        className="form-control my-4"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Buttons */}

      <div className="mb-4">
        {categories.map((item) => (
          <button
            key={item}
            className="btn btn-outline-primary me-2 mb-2"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products */}

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
