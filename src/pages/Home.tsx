import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">GIGA SPORTS SHOP</h1>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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
