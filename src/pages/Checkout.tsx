import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="container mt-4">
      <h1>Checkout</h1>

      <div className="row">
        <div className="col-md-7">
          <div className="card shadow p-4">
            <h4>Customer Information</h4>

            <input className="form-control mb-3" placeholder="Full Name" />

            <input className="form-control mb-3" placeholder="Phone Number" />

            <input className="form-control mb-3" placeholder="Address" />

            <h4>Payment Method</h4>

            <div>
              <input type="radio" name="payment" /> Cash on Delivery
            </div>

            <div>
              <input type="radio" name="payment" /> Easypaisa
            </div>

            <div>
              <input type="radio" name="payment" /> JazzCash
            </div>

            <div>
              <input type="radio" name="payment" /> Debit / Credit Card
            </div>

            <button className="btn btn-success mt-4">Place Order</button>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card shadow p-4">
            <h4>Order Summary</h4>

            {cart.map((item) => (
              <p key={item.id}>
                {item.name} × {item.quantity}
                <br />
                Rs. {item.price * item.quantity}
              </p>
            ))}

            <hr />

            <h3>Total: Rs. {totalPrice}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
