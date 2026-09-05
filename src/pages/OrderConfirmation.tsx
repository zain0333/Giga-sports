import { Link, useLocation } from "react-router-dom";
import { useMemo, useEffect, useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import { useAchievement } from "../context/AchievementContext";

function OrderConfirmation() {
  const location = useLocation();
  const { triggerAchievement } = useAchievement();
  const hasTriggeredRef = useRef(false);

  const orderData = useMemo(() => {
    return (
      location.state || {
        orderId: "GIGA-784921",
        total: 0,
        items: 0,
      }
    );
  }, [location.state]);

  useEffect(() => {
    if (!hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      const timer = setTimeout(() => {
        triggerAchievement({
          title: "🎉 Achievement Unlocked!",
          points: 500,
          subtitle: "🏆 You earned 500 GIGA Points!",
          badge: "ORDER CHAMPION REWARD",
        });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [triggerAchievement]);

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

          {/* Points Reward Box */}
          <div
            className="points-earned-callout p-3 mb-4 rounded-3 d-flex align-items-center justify-content-between"
            style={{
              background: "linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.25) 100%)",
              border: "1px solid rgba(245, 158, 11, 0.5)",
              color: "#fbbf24",
            }}
          >
            <div className="d-flex align-items-center gap-3">
              <FaTrophy style={{ fontSize: "1.8rem", color: "#fbbf24" }} />
              <div>
                <strong className="d-block" style={{ fontSize: "1.05rem" }}>
                  🎉 +500 GIGA Points Earned!
                </strong>
                <small style={{ color: "#dbeafe" }}>
                  Credited to your athlete rewards balance for future savings.
                </small>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() =>
                triggerAchievement({
                  title: "🎉 Achievement Unlocked!",
                  points: 500,
                  subtitle: "🏆 You earned 500 GIGA Points!",
                })
              }
              style={{
                background: "#f59e0b",
                color: "#ffffff",
                fontWeight: 700,
                borderRadius: "8px",
              }}
            >
              Replay Animation 🏆
            </button>
          </div>

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
