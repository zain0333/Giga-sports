import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  // Stock status
  const getStockStatus = () => {
    if (product.stock === 0) {
      return <span className="stock-status out-of-stock">🔴 Out of Stock</span>;
    }

    if (product.stock <= 3) {
      return (
        <span className="stock-status low-stock">
          🟠 Only {product.stock} left
        </span>
      );
    }

    return <span className="stock-status in-stock">🟢 In Stock</span>;
  };

  // Add product to cart
  const handleAddToCart = () => {
    if (product.stock === 0) {
      return;
    }

    addToCart(product);
  };

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      {/* Product Details */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <p className="product-category">{product.category}</p>

        <h4 className="product-price">Rs. {product.price}</h4>

        {/* Stock Status */}
        <div className="stock-container">{getStockStatus()}</div>

        {/* Add To Cart Button */}
        <button
          className="add-cart-btn"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of Stock" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
