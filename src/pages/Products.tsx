import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🏆 GIGA SPORTS SHOP</h1>

      <div className="row">
        {products.map((product) => (
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

export default Products;
