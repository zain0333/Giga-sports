function Checkout() {
  return (
    <div className="container mt-4">
      <h1>Checkout Page</h1>

      <div className="card shadow p-4">
        <h4>Customer Information</h4>

        <input className="form-control mb-3" placeholder="Full Name" />

        <input className="form-control mb-3" placeholder="Phone Number" />

        <input className="form-control mb-3" placeholder="Address" />

        <h4>Payment Method</h4>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment" />
          <label className="form-check-label">Cash on Delivery (COD)</label>
        </div>

        <div className="form-check mt-2">
          <input className="form-check-input" type="radio" name="payment" />
          <label className="form-check-label">Easypaisa</label>
        </div>

        <div className="form-check mt-2">
          <input className="form-check-input" type="radio" name="payment" />
          <label className="form-check-label">JazzCash</label>
        </div>

        <div className="form-check mt-2">
          <input className="form-check-input" type="radio" name="payment" />
          <label className="form-check-label">Debit / Credit Card</label>
        </div>

        <button className="btn btn-success mt-4">Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;
