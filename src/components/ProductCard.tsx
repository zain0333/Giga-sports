import { useCart } from "../context/CartContext";

type ProductProps = {
  id: number;
  name: string;
  category?: string;
  price: number;
  image: string;
};

function ProductCard({ id, name, category, price, image }: ProductProps) {
  const { addToCart } = useCart();

  const product = {
    id,
    name,
    category,
    price,
    image,
    quantity: 1,
  };

  return (
    <div className="card shadow">
      <img src={image} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5>{name}</h5>

        <p>{category}</p>

        <p>Price: Rs. {price}</p>

        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
