import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {
  return (
    <div className="container products-page">
      {/* PAGE HEADING */}

      <div className="page-heading">
        <h1>Sports Products</h1>

        <p>Choose the best equipment for your favorite sport.</p>
      </div>

      {/* PRODUCTS */}

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
