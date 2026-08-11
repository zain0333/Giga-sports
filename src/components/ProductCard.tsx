import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="card product-card h-100 shadow-sm">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top product-image"
      />

      <div className="card-body d-flex flex-column">
        {/* Category */}
        <small className="text-muted mb-2">{product.category}</small>

        {/* Product Name */}
        <h5 className="card-title fw-bold">{product.name}</h5>

        {/* Price */}
        <h6 className="product-price mb-3">
          Rs. {product.price.toLocaleString()}
        </h6>

        {/* Add To Cart */}
        <button
          type="button"
          className="btn btn-primary mt-auto"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
