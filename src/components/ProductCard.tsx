import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  // Discount percentage
  const discount = 20;

  // Calculate discounted price
  const discountedPrice = product.price - (product.price * discount) / 100;

  return (
    <div className="product-card">
      {/* Discount Badge */}
      <div className="discount-badge">🔥 {discount}% OFF</div>

      {/* Product Image */}
      <img src={product.image} alt={product.name} />

      {/* Product Information */}
      <div className="product-card-body">
        <h3>{product.name}</h3>

        {/* Original Price */}
        <p className="original-price">Rs. {product.price}</p>

        {/* Discounted Price */}
        <p className="discount-price">Rs. {discountedPrice}</p>

        {/* Add To Cart */}
        <button className="add-cart-btn" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
