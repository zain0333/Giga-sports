import { useState } from "react";

function OrderTracking() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const trackOrder = () => {
    if (orderId.trim() === "") {
      setStatus("Please enter your Order ID.");
      return;
    }

    // Demo order tracking
    if (orderId === "GIGA123") {
      setStatus("Your order is Out for Delivery 🚚");
    } else if (orderId === "GIGA456") {
      setStatus("Your order has been Shipped 📦");
    } else if (orderId === "GIGA789") {
      setStatus("Your order has been Delivered ✅");
    } else {
      setStatus("Order not found. Please check your Order ID.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h2 className="text-center mb-3">📦 Track Your Order</h2>

              <p className="text-center text-muted">
                Enter your Order ID to check your order status.
              </p>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Order ID e.g. GIGA123"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />

                <button className="btn btn-primary" onClick={trackOrder}>
                  Track Order
                </button>
              </div>

              {status && (
                <div className="alert alert-info text-center mt-4">
                  <strong>{status}</strong>
                </div>
              )}

              <div className="mt-4">
                <h5>Demo Order IDs:</h5>

                <ul className="list-group">
                  <li className="list-group-item">
                    GIGA123 → 🚚 Out for Delivery
                  </li>

                  <li className="list-group-item">GIGA456 → 📦 Shipped</li>

                  <li className="list-group-item">GIGA789 → ✅ Delivered</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderTracking;
