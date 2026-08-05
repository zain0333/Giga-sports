function Checkout() {
  return (
    <div className="container mt-4">
      <h1>Checkout</h1>

      <div className="card p-4 shadow">
        <h4 className="mb-3">Select Payment Method</h4>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="cod"
          />
          <label className="form-check-label" htmlFor="cod">
            Cash on Delivery (COD)
          </label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="easypaisa"
          />
          <label className="form-check-label" htmlFor="easypaisa">
            Easypaisa
          </label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="jazzcash"
          />
          <label className="form-check-label" htmlFor="jazzcash">
            JazzCash
          </label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="card"
          />
          <label className="form-check-label" htmlFor="card">
            Debit / Credit Card
          </label>
        </div>

        <button className="btn btn-success mt-4">Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;
