import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addToCart(product);
  };

  const rating = product.rating ?? 4.8;
  const reviews = product.reviews ?? 24;
  const badge = product.badge ?? "⭐ BEST SELLER";
  const stock = product.stock ?? 10;

  return (
    <article
      className="professional-product-card"
      onClick={handleCardClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          handleCardClick();
        }
      }}
      role="button"
      tabIndex={0}
    >
      {/* IMAGE */}
      <div className="professional-product-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            // Fallback image if network fails
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* BADGE */}
        <span className="professional-badge">{badge}</span>
      </div>

      {/* INFORMATION */}
      <div className="professional-product-info">
        <h2>{product.name}</h2>

        <span className="professional-category">{product.category}</span>

        {/* RATING */}
        <div className="professional-rating">
          <div className="professional-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                style={{
                  color: i < Math.floor(rating) ? "#fbbf24" : "#e2e8f0",
                }}
              />
            ))}
          </div>

          <span className="rating-number">{rating.toFixed(1)}</span>
          <span className="review-count">({reviews})</span>
        </div>

        {/* PRICE */}
        <div className="professional-price">
          Rs. {product.price.toLocaleString()}
        </div>

        {/* STOCK STATUS */}
        <div className="professional-stock">
          <span
            className="stock-dot"
            style={{
              backgroundColor:
                stock <= 0 ? "#ef4444" : stock <= 5 ? "#f59e0b" : "#10b981",
            }}
          ></span>
          <span
            style={{
              color:
                stock <= 0 ? "#ef4444" : stock <= 5 ? "#d97706" : "#10b981",
            }}
          >
            {stock <= 0
              ? "Out of Stock"
              : stock <= 5
              ? `Only ${stock} Left`
              : "In Stock"}
          </span>
        </div>

        {/* BUTTON */}
        <button
          type="button"
          className="professional-cart-button"
          onClick={handleAddToCart}
          disabled={stock <= 0}
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
