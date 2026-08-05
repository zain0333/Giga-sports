import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">GIGA SPORTS SHOP</h1>

      <div className="row">
        {products.map((products) => (
          <div className="col-md-3 mb-4" key={products.id}>
            <ProductCard
              name={products.name}
              category={products.category}
              price={products.price}
              image={products.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
