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

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>Add some sports products to your cart.</p>

          <Link to="/products" className="btn btn-primary">
            Shop Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h1 className="page-title">Shopping Cart</h1>

      <div className="row g-4">
        {/* CART PRODUCTS */}

        <div className="col-lg-8">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />
                </div>

                <div className="col-md-5">
                  <h5>{item.name}</h5>

                  <p>Rs. {item.price.toLocaleString()}</p>
                </div>

                <div className="col-md-2">
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                <div className="col-md-2">
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

          <button className="btn btn-outline-danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        {/* TOTAL */}

        <div className="col-lg-4">
          <div className="cart-total">
            <h3>Order Summary</h3>

            <hr />

            <div className="d-flex justify-content-between">
              <span>Total:</span>

              <strong>Rs. {total.toLocaleString()}</strong>
            </div>

            <button className="btn btn-primary w-100 mt-4">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
