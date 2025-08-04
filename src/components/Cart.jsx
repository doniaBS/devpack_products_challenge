import { useState } from "react";
import OrderConfirmationModal from "./OrderConfirmationModal";
import "../Cart.css";

export default function Cart({ cart, removeFromCart, updateQuantity, clearCart }) {
  const [showModal, setShowModal] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirmOrder = () => {
    if (cart.length > 0) {
      setShowModal(true);
    }
  };

   const handleNewOrder = () => {
    clearCart();
    setShowModal(false);
  };


  return (
    <div className="cart">
      <h2>Your Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
        <img
        src={new URL("../assets/images/illustration-empty-cart.svg", import.meta.url).href}
        alt="Empty cart illustration"
        className="empty-cart-img"
        />
        <p className="empty-cart-text">Your added items will appear here</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.name} className="cart-item">
                <div className="cart-info">
                  <strong>{item.name}</strong>
                  <div className="cart-meta">
                    <span className="quantity">{item.quantity}x</span>
                    <span className="price">@ ${item.price.toFixed(2)}</span>
                    <span className="total-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  className="remove"
                  onClick={() => removeFromCart(item.name)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Order Total</span>
            <span className="total-amount">${total.toFixed(2)}</span>
          </div>

          <div className="carbon-note">
            <span>🌱 This is a carbon‑neutral delivery</span>
          </div>

          <button className="confirm" onClick={handleConfirmOrder} >Confirm Order</button>
        </>
      )}
      {showModal && (
        <OrderConfirmationModal
          cart={cart}
          total={total}
          onClose={handleNewOrder}
        />
      )}
    </div>
  );
}
