import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">GIGA SPORTS SHOP</h1>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard
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
