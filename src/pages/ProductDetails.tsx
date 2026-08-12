import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  // Find product using the ID from the URL
  const product = products.find((item) => item.id.toString() === id);

  // Product not found
  if (!product) {
    return (
      <main className="container my-5 text-center">
        <div className="alert alert-danger">
          <h3>Product Not Found</h3>
          <p>The product you are looking for does not exist.</p>

          <Link to="/products" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container my-5">
      <div className="row g-5 align-items-center">
        {/* Product Image */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-3">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded product-details-image"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="col-md-6">
          <span className="badge bg-primary mb-3">{product.category}</span>

          <h1 className="fw-bold mb-3">{product.name}</h1>

          <h2 className="text-primary fw-bold mb-3">
            Rs. {product.price.toLocaleString()}
          </h2>

          <p className="text-muted fs-5">
            High-quality sports product from GIGA SPORTS SHOP. Perfect for
            sports players and fitness lovers.
          </p>

          <hr />

          {/* Product Information */}
          <div className="mb-4">
            <h5 className="fw-bold">Product Information</h5>

            <p className="mb-2">
              <strong>Category:</strong> {product.category}
            </p>

            <p className="mb-2">
              <strong>Product:</strong> {product.name}
            </p>

            <p className="mb-2">
              <strong>Price:</strong> Rs. {product.price.toLocaleString()}
            </p>

            <p className="mb-2 text-success">
              <strong>✓ Available</strong>
            </p>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3 flex-wrap">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => addToCart(product)}
            >
              🛒 Add To Cart
            </button>

            <Link to="/products" className="btn btn-outline-secondary btn-lg">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
