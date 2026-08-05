import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="container mt-4">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="card p-4 shadow">
          <h3>Your cart is empty</h3>

          <Link to="/products" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <h4 className="mb-3">Total Items: {totalItems}</h4>

          <div className="row">
            {cart.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card shadow h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{
                      height: "220px",
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

          <div className="card shadow p-4 mt-3">
            <h3>Total Price: Rs. {totalPrice}</h3>

            <Link to="/checkout" className="btn btn-primary mt-3">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
