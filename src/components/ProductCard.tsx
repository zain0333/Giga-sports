import { FaShoppingCart, FaStar } from "react-icons/fa";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  // Example rating
  const rating = 5;
  const reviewCount = 24;

  // Stock status
  // If your Product type already has stock, this will use it.
  // Otherwise it safely assumes the product is in stock.
  const stock =
    "stock" in product && typeof product.stock === "number"
      ? product.stock
      : 10;

  let stockText = "In Stock";
  let stockClass = "in-stock";

  if (stock === 0) {
    stockText = "Out of Stock";
    stockClass = "out-of-stock";
  } else if (stock <= 3) {
    stockText = `Only ${stock} left`;
    stockClass = "low-stock";
  }

  const handleAddToCart = () => {
    if (stock === 0) return;

    addToCart(product);
  };

  return (
    <div className="product-card professional-product-card">
      {/* Product Image */}
      <div className="professional-product-image">
        {/* Best Seller Badge */}
        <span className="best-seller-badge">⭐ BEST SELLER</span>

        <img
          src={product.image}
          alt={product.name}
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.parentElement?.classList.add("image-error");
          }}
        />
      </div>

      {/* Product Information */}
      <div className="professional-product-body">
        {/* Product Name */}
        <h3 className="professional-product-title">{product.name}</h3>

        {/* Category */}
        <p className="professional-product-category">{product.category}</p>

        {/* Rating */}
        <div className="product-rating">
          <div className="stars">
            {Array.from({ length: rating }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <span>({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="professional-product-price">
          Rs. {product.price.toLocaleString()}
        </div>

        {/* Stock Status */}
        <div className={`stock-status ${stockClass}`}>
          {stock === 0 ? "🔴" : stock <= 3 ? "🟠" : "🟢"} {stockText}
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          className="professional-cart-btn"
          onClick={handleAddToCart}
          disabled={stock === 0}
        >
          <FaShoppingCart />

          {stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
