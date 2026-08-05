import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="container mt-4">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <img src={product.image} alt={product.name} className="card-img-top" />

        <h1 className="mt-3">{product.name}</h1>

        <h4>Category: {product.category}</h4>

        <h3>Price: Rs. {product.price}</h3>

        <p>High quality sports product from GIGA SPORTS SHOP.</p>

        <button
          className="btn btn-primary"
          onClick={() =>
            addToCart({
              ...product,
              quantity: 1,
            })
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
