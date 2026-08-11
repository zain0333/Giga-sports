import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {
  return (
    <main className="products-page">
      <div className="container my-5">
        {/* Page Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Sports Products</h1>

          <p className="text-muted">
            Find the best sports equipment at GIGA SPORTS SHOP
          </p>
        </div>

        {/* Products */}
        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
