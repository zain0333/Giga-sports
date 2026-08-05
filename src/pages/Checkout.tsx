import { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="container mt-5">
        <div className="card shadow p-5 text-center">
          <h1 className="text-success">Order Placed Successfully 🎉</h1>

          <p className="mt-3">Thank you for shopping at GIGA SPORTS SHOP.</p>

          <h4>Your Total: Rs. {totalPrice}</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>Checkout</h1>

      <div className="card shadow p-4">
        <h4>Customer Information</h4>

        <input className="form-control mb-3" placeholder="Full Name" />

        <input className="form-control mb-3" placeholder="Phone Number" />

        <input className="form-control mb-3" placeholder="Address" />

        <h4>Payment Method</h4>

        <div>
          <input type="radio" name="payment" />
          Cash on Delivery (COD)
        </div>

        <div>
          <input type="radio" name="payment" />
          Easypaisa
        </div>

        <div>
          <input type="radio" name="payment" />
          JazzCash
        </div>

        <div>
          <input type="radio" name="payment" />
          Debit / Credit Card
        </div>

        <h3 className="mt-4">Total: Rs. {totalPrice}</h3>

        <button className="btn btn-success mt-3" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
