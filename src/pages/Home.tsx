import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Cricket",
    "Football",
    "Badminton",
    "Shoes",
    "Gym",
  ];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4">GIGA SPORTS SHOP</h1>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Categories */}
      <div className="mb-4">
        {categories.map((item) => (
          <button
            key={item}
            className="btn btn-outline-primary me-2"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
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

export default Home;
