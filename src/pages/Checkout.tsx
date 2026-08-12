import { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCreditCard,
  FaMoneyBillWave,
  FaShoppingBag,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <main className="checkout-page">
        <div className="container">
          <div className="order-success-card">
            <div className="success-icon">✓</div>

            <h1>Order Placed Successfully!</h1>

            <p>
              Thank you for shopping with GIGA SPORTS. Your order has been
              received.
            </p>

            <div className="success-order-info">
              <strong>Order Status</strong>
              <span>Processing</span>
            </div>

            <a href="/products" className="checkout-back-btn">
              Continue Shopping
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="container">
        {/* Page Header */}
        <div className="checkout-heading">
          <span>GIGA SPORTS</span>

          <h1>Checkout</h1>

          <p>Complete your information to place your order.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* =================================
                CUSTOMER INFORMATION
            ================================== */}
            <div className="col-lg-8">
              <div className="checkout-section-card">
                <div className="checkout-section-title">
                  <div className="checkout-title-icon">
                    <FaUser />
                  </div>

                  <div>
                    <h2>Customer Information</h2>
                    <p>Enter your contact details</p>
                  </div>
                </div>

                <div className="row g-3">
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label htmlFor="fullName">Full Name</label>

                    <div className="checkout-input-wrapper">
                      <FaUser />

                      <input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label htmlFor="phone">Phone Number</label>

                    <div className="checkout-input-wrapper">
                      <FaPhone />

                      <input
                        id="phone"
                        type="tel"
                        placeholder="03XX XXXXXXX"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-12">
                    <label htmlFor="email">Email Address</label>

                    <div className="checkout-input-wrapper">
                      <FaEnvelope />

                      <input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================
                  DELIVERY INFORMATION
              ================================== */}
              <div className="checkout-section-card">
                <div className="checkout-section-title">
                  <div className="checkout-title-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h2>Delivery Information</h2>
                    <p>Where should we deliver your order?</p>
                  </div>
                </div>

                <div className="row g-3">
                  {/* Address */}
                  <div className="col-12">
                    <label htmlFor="address">Delivery Address</label>

                    <div className="checkout-input-wrapper textarea-wrapper">
                      <FaMapMarkerAlt />

                      <textarea
                        id="address"
                        placeholder="Enter your complete delivery address"
                        rows={3}
                        required
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="col-md-6">
                    <label htmlFor="city">City</label>

                    <div className="checkout-input-wrapper">
                      <FaMapMarkerAlt />

                      <input
                        id="city"
                        type="text"
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                  </div>

                  {/* Postal Code */}
                  <div className="col-md-6">
                    <label htmlFor="postalCode">Postal Code</label>

                    <div className="checkout-input-wrapper">
                      <input
                        id="postalCode"
                        type="text"
                        placeholder="Enter postal code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================
                  PAYMENT METHOD
              ================================== */}
              <div className="checkout-section-card">
                <div className="checkout-section-title">
                  <div className="checkout-title-icon">
                    <FaCreditCard />
                  </div>

                  <div>
                    <h2>Payment Method</h2>
                    <p>Choose your preferred payment method</p>
                  </div>
                </div>

                <div className="payment-options">
                  {/* COD */}
                  <label
                    className={`payment-option ${
                      paymentMethod === "cod" ? "payment-selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                    />

                    <div className="payment-icon">
                      <FaMoneyBillWave />
                    </div>

                    <div className="payment-details">
                      <strong>Cash on Delivery</strong>
                      <span>Pay when your order arrives</span>
                    </div>
                  </label>

                  {/* Card */}
                  <label
                    className={`payment-option ${
                      paymentMethod === "card" ? "payment-selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                    />

                    <div className="payment-icon">
                      <FaCreditCard />
                    </div>

                    <div className="payment-details">
                      <strong>Debit / Credit Card</strong>
                      <span>Secure card payment</span>
                    </div>
                  </label>

                  {/* Easypaisa */}
                  <label
                    className={`payment-option ${
                      paymentMethod === "easypaisa" ? "payment-selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="easypaisa"
                      checked={paymentMethod === "easypaisa"}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                    />

                    <div className="payment-icon payment-easypaisa">EP</div>

                    <div className="payment-details">
                      <strong>EasyPaisa</strong>
                      <span>Pay using EasyPaisa</span>
                    </div>
                  </label>

                  {/* JazzCash */}
                  <label
                    className={`payment-option ${
                      paymentMethod === "jazzcash" ? "payment-selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="jazzcash"
                      checked={paymentMethod === "jazzcash"}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                    />

                    <div className="payment-icon payment-jazzcash">JC</div>

                    <div className="payment-details">
                      <strong>JazzCash</strong>
                      <span>Pay using JazzCash</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* =================================
                ORDER SUMMARY
            ================================== */}
            <div className="col-lg-4">
              <div className="checkout-summary-card">
                <div className="summary-heading">
                  <FaShoppingBag />

                  <h2>Order Summary</h2>
                </div>

                {/* Demo product */}
                <div className="summary-product">
                  <div className="summary-product-image">🏏</div>

                  <div className="summary-product-info">
                    <strong>Sports Product</strong>
                    <span>Quantity: 1</span>
                  </div>

                  <strong>Rs. 8,500</strong>
                </div>

                <div className="summary-divider" />

                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>Rs. 8,500</strong>
                </div>

                <div className="summary-row">
                  <span>Delivery</span>
                  <strong>Rs. 200</strong>
                </div>

                <div className="summary-divider" />

                <div className="summary-total">
                  <span>Total</span>
                  <strong>Rs. 8,700</strong>
                </div>

                <button type="submit" className="place-order-btn">
                  <FaLock />
                  Place Order
                </button>

                <div className="secure-checkout">
                  <FaShieldAlt />

                  <span>Your information is securely protected.</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Checkout;
