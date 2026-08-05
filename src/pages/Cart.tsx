import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mt-4">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div className="col-md-4 mb-3" key={item.id}>
              <div className="card">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5>{item.name}</h5>

                  <p>Price: Rs. {item.price}</p>

                  <p>Quantity: {item.quantity}</p>

                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
