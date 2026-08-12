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
        <img src={product.image} alt={product.name} loading="lazy" />

        {/* BEST SELLER */}

        <span className="professional-badge">⭐ BEST SELLER</span>
      </div>

      {/* INFORMATION */}

      <div className="professional-product-info">
        <h2>{product.name}</h2>

        <span className="professional-category">{product.category}</span>

        {/* RATING */}

        <div className="professional-rating">
          <div className="professional-stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <span className="rating-number">4.8</span>

          <span className="review-count">(24)</span>
        </div>

        {/* PRICE */}

        <div className="professional-price">
          Rs. {product.price.toLocaleString()}
        </div>

        {/* STOCK */}

        <div className="professional-stock">
          <span className="stock-dot"></span>
          <span>In Stock</span>
        </div>

        {/* BUTTON */}

        <button
          type="button"
          className="professional-cart-button"
          onClick={handleAddToCart}
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
