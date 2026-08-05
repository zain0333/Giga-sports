import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="container mt-4">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <>
          <div className="row">
            {cart.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card shadow">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="card-body">
                    <h5>{item.name}</h5>

                    <p>Price: Rs. {item.price}</p>

                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      <span className="mx-3">{item.quantity}</span>

                      <button
                        className="btn btn-success"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-outline-danger mt-3"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-3 mt-3 shadow">
            <h3>Total Price: Rs. {totalPrice}</h3>

            <Link to="/checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
