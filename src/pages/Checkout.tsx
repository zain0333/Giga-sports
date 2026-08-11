import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleCheckout(e: React.FormEvent) {
    e.preventDefault();

    alert(
      "Order placed successfully! Thank you for shopping with GIGA SPORTS SHOP.",
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Customer Information</h2>

          <form onSubmit={handleCheckout}>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Phone</label>
            <input type="tel" placeholder="Enter your phone number" required />

            <label>Address</label>
            <textarea
              placeholder="Enter your complete address"
              required
            ></textarea>

            <label>Payment Method</label>

            <select required>
              <option value="">Select payment method</option>
              <option value="cod">Cash on Delivery</option>
              <option value="easypaisa">Easypaisa</option>
              <option value="jazzcash">JazzCash</option>
              <option value="card">Debit / Credit Card</option>
            </select>

            <button type="submit" className="checkout-btn">
              Place Order
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="summary-item" key={item.id}>
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>Rs. {item.price * item.quantity}</span>
                </div>
              ))}

              <hr />

              <h3>Total: Rs. {total}</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
