import type { Product } from "../data/products";

import { useCart } from "../context/CartContext";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      {/* PRODUCT IMAGE */}

      <img src={product.image} alt={product.name} className="card-img-top" />

      {/* PRODUCT INFORMATION */}

      <div className="card-body">
        <span className="product-category">{product.category}</span>

        <h5 className="card-title">{product.name}</h5>

        <p className="product-price">Rs. {product.price.toLocaleString()}</p>

        <button
          className="btn btn-primary w-100"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
