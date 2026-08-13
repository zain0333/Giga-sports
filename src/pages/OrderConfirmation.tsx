import { Link, useLocation } from "react-router-dom";

function OrderConfirmation() {
  const location = useLocation();

  const orderData = location.state || {
    orderId: "GIGA-" + Math.floor(100000 + Math.random() * 900000),
    total: 0,
    items: 0,
  };

  return (
    <main className="order-confirmation-page">
      <div className="container py-5">
        <div className="confirmation-card">
          {/* Success Icon */}
          <div className="success-icon">✓</div>

          {/* Heading */}
          <h1>Order Confirmed!</h1>

          <p className="confirmation-message">
            Thank you for shopping with <strong>GIGA SPORTS SHOP</strong>. Your
            order has been successfully placed.
          </p>

          {/* Order Information */}
          <div className="order-details">
            <div className="order-detail">
              <span>Order Number</span>
              <strong>{orderData.orderId}</strong>
            </div>

            <div className="order-detail">
              <span>Items</span>
              <strong>{orderData.items}</strong>
            </div>

            <div className="order-detail">
              <span>Total Amount</span>
              <strong>Rs. {Number(orderData.total).toLocaleString()}</strong>
            </div>

            <div className="order-detail">
              <span>Payment</span>
              <strong>Cash on Delivery</strong>
            </div>
          </div>

          {/* Email Message */}
          <div className="email-box">
            <div className="email-icon">📧</div>

            <div>
              <h3>Order Confirmation</h3>
              <p>
                Your order details have been confirmed. You will receive your
                order soon.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="confirmation-buttons">
            <Link to="/" className="btn-home">
              🏠 Back to Home
            </Link>

            <Link to="/products" className="btn-shop">
              🛍️ Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OrderConfirmation;
