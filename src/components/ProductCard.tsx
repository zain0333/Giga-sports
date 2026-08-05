type ProductProps = {
  name: string;
  category: string;
  price: number;
  image: string;
};

function ProductCard({ name, category, price, image }: ProductProps) {
  return (
    <div className="card h-100 shadow">
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5>{name}</h5>

        <p>{category}</p>

        <h4>Rs. {price}</h4>

        <button className="btn btn-primary w-100">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
