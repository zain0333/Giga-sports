import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const navigate = useNavigate();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Go to Checkout page
  function handleCheckout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/checkout");
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some sports products to your cart.</p>
        </div>
      ) : (
        <>
          {/* Cart Products */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-product-image"
                />

                {/* Product Information */}
                <div className="cart-product-info">
                  <h2>{item.name}</h2>

                  <p>Price: Rs. {item.price}</p>

                  {/* Quantity */}
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  {/* Remove */}
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Clear Cart */}
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>

          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>

            <hr />

            <div className="summary-row">
              <strong>Products:</strong>

              <strong>{cart.length}</strong>
            </div>

            <div className="summary-row">
              <strong>Total:</strong>

              <strong>Rs. {total}</strong>
            </div>

            {/* Checkout */}
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
