import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="products-page">
      <h1 className="products-title">Our Sports Products</h1>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
