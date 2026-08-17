import { Link, useParams } from "react-router-dom";
import { FaStar, FaShoppingCart, FaArrowLeft, FaShieldAlt, FaShippingFast, FaUndoAlt } from "react-icons/fa";
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
      <main className="container my-5 text-center py-5">
        <div className="alert alert-danger p-4 rounded-4 shadow-sm max-w-600 mx-auto">
          <h3>Product Not Found</h3>
          <p className="text-muted">The sports product you are looking for does not exist or has been relocated.</p>

          <Link to="/products" className="btn btn-primary mt-2">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const rating = product.rating ?? 4.8;
  const reviews = product.reviews ?? 24;
  const stock = product.stock ?? 10;
  const badge = product.badge ?? "⭐ BEST SELLER";
  const description =
    product.description ??
    "High-performance athletic sports product from GIGA SPORTS. Precision manufactured for peak durability, tournament compliance, and professional player satisfaction.";

  return (
    <main className="container my-5 py-3">
      <div className="mb-4">
        <Link to="/products" className="btn btn-outline-secondary d-inline-flex align-items-center gap-2">
          <FaArrowLeft />
          <span>Back to Products</span>
        </Link>
      </div>

      <div className="row g-5 align-items-center">
        {/* Product Image */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm p-4 rounded-4 bg-white position-relative text-center overflow-hidden">
            <span className="position-absolute top-0 start-0 m-3 badge bg-dark py-2 px-3 rounded-pill text-warning">
              {badge}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-3 product-details-image"
              style={{ maxHeight: "420px", objectFit: "contain", width: "100%" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="col-lg-6">
          <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill mb-3 fw-bold">
            {product.category}
          </span>

          <h1 className="fw-bold mb-2 text-dark">{product.name}</h1>

          {/* Rating */}
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="d-flex text-warning">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} style={{ color: i < Math.floor(rating) ? "#f59e0b" : "#e2e8f0" }} />
              ))}
            </div>
            <span className="fw-bold text-dark">{rating.toFixed(1)}</span>
            <span className="text-muted">({reviews} customer reviews)</span>
          </div>

          <h2 className="text-warning fw-bolder mb-3 fs-1">
            Rs. {product.price.toLocaleString()}
          </h2>

          <p className="text-secondary fs-6 mb-4 leading-relaxed">
            {description}
          </p>

          <hr />

          {/* Stock & Availability */}
          <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: stock <= 0 ? "#ef4444" : stock <= 5 ? "#f59e0b" : "#10b981",
                  display: "inline-block",
                }}
              ></span>
              <strong style={{ color: stock <= 0 ? "#ef4444" : stock <= 5 ? "#d97706" : "#10b981" }}>
                {stock <= 0 ? "Out of Stock" : stock <= 5 ? `Only ${stock} items left in stock!` : "In Stock & Ready to Dispatch"}
              </strong>
            </div>

            <p className="mb-1 text-muted">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="mb-0 text-muted">
              <strong>SKU:</strong> GIGA-SP-{String(product.id).padStart(4, "0")}
            </p>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3 flex-wrap mb-4">
            <button
              className="btn btn-warning btn-lg px-4 fw-bold text-white d-flex align-items-center gap-2 shadow-sm"
              onClick={() => addToCart(product)}
              disabled={stock <= 0}
              style={{ background: "#f17300", borderColor: "#f17300" }}
            >
              <FaShoppingCart />
              <span>Add To Cart</span>
            </button>
          </div>

          {/* Trust Value Badges */}
          <div className="row g-2 pt-3 border-top">
            <div className="col-4">
              <div className="d-flex align-items-center gap-2 text-muted small">
                <FaShippingFast className="text-primary fs-5" />
                <span>Express Shipping</span>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex align-items-center gap-2 text-muted small">
                <FaShieldAlt className="text-primary fs-5" />
                <span>100% Authentic</span>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex align-items-center gap-2 text-muted small">
                <FaUndoAlt className="text-primary fs-5" />
                <span>7-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
