import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const { cart, clearCart } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!name || !email || !phone || !address || !city) {
      alert("Please fill in all customer details.");
      return;
    }

    const orderId = "GIGA-" + Math.floor(100000 + Math.random() * 900000);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const orderData = {
      orderId: orderId,
      total: total,
      items: totalItems,
      customerName: name,
      email: email,
      phone: phone,
      address: address,
      city: city,
      paymentMethod: paymentMethod,
    };

    clearCart();

    navigate("/order-confirmation", {
      state: orderData,
    });
  };

  if (cart.length === 0) {
    return (
      <main className="container py-5">
        <div className="text-center">
          <h1>Your Cart Is Empty</h1>

          <p className="text-muted">
            Add some sports products before going to checkout.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            🛍️ Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="container py-5">
        {/* Page Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Checkout</h1>

          <p className="text-muted">
            Complete your information to place your order.
          </p>
        </div>

        <div className="row g-4">
          {/* =========================
              CUSTOMER INFORMATION
          ========================== */}
          <div className="col-lg-7">
            <div className="card shadow-sm border-0 p-4">
              <h3 className="mb-4">📦 Delivery Information</h3>

              <form onSubmit={handlePlaceOrder}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone Number</label>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="03XX-XXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Delivery Address
                  </label>

                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Enter your complete delivery address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                {/* City */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">City</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>

                {/* Payment */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Payment Method
                  </label>

                  <select
                    className="form-select"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="Cash on Delivery">
                      💵 Cash on Delivery
                    </option>

                    <option value="Easypaisa">📱 Easypaisa</option>

                    <option value="JazzCash">📱 JazzCash</option>

                    <option value="Debit/Credit Card">
                      💳 Debit/Credit Card
                    </option>
                  </select>
                </div>

                {/* Place Order */}
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  📦 Place Order
                </button>
              </form>
            </div>
          </div>

          {/* =========================
              ORDER SUMMARY
          ========================== */}
          <div className="col-lg-5">
            <div className="card shadow-sm border-0 p-4">
              <h3 className="mb-4">🛒 Order Summary</h3>

              {/* Products */}
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center border-bottom py-3"
                >
                  <div className="me-3">
                    <h6 className="mb-1">{item.name}</h6>

                    <small className="text-muted">
                      Quantity: {item.quantity}
                    </small>
                  </div>

                  <strong>
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </strong>
                </div>
              ))}

              {/* Subtotal */}
              <div className="d-flex justify-content-between mt-4">
                <span>Subtotal</span>

                <strong>Rs. {total.toLocaleString()}</strong>
              </div>

              {/* Delivery */}
              <div className="d-flex justify-content-between mt-2">
                <span>Delivery</span>

                <strong>FREE</strong>
              </div>

              <hr />

              {/* Total */}
              <div className="d-flex justify-content-between">
                <h4>Total</h4>

                <h4>Rs. {total.toLocaleString()}</h4>
              </div>

              {/* Security Message */}
              <div className="alert alert-info mt-4 mb-0">
                🔒 Your order information is secure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
