import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  // Calculate total price

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ==========================================
  // EMPTY CART
  // ==========================================

  if (cart.length === 0) {
    return (
      <div className="container cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty 🛒</h1>

          <p>You haven't added any products yet.</p>

          <Link to="/products" className="btn btn-primary">
            Shop Products
          </Link>
        </div>
      </div>
    );
  }

  // ==========================================
  // CART WITH PRODUCTS
  // ==========================================

  return (
    <div className="container cart-page">
      <h1 className="page-title">Shopping Cart 🛒</h1>

      <div className="row g-4">
        {/* ==================================
            CART PRODUCTS
        ================================== */}

        <div className="col-lg-8">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="row align-items-center g-3">
                {/* IMAGE */}

                <div className="col-4 col-md-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />
                </div>

                {/* PRODUCT NAME */}

                <div className="col-8 col-md-3">
                  <h5>{item.name}</h5>

                  <p>Rs. {item.price.toLocaleString()}</p>
                </div>

                {/* QUANTITY */}

                <div className="col-6 col-md-3">
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                {/* REMOVE */}

                <div className="col-6 col-md-3">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* CLEAR CART */}

          <button className="btn btn-outline-danger mt-2" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        {/* ==================================
            ORDER SUMMARY
        ================================== */}

        <div className="col-lg-4">
          <div className="cart-total">
            <h3>Order Summary</h3>

            <hr />

            <div className="d-flex justify-content-between mb-2">
              <span>Products:</span>

              <span>
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>

            <div className="d-flex justify-content-between">
              <strong>Total:</strong>

              <strong>Rs. {total.toLocaleString()}</strong>
            </div>

            <button
              className="btn btn-primary w-100 mt-4"
              onClick={() => alert("Checkout feature will be added next!")}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
