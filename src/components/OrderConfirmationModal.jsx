import "../OrderConfirmationModal.css";
import checkIcon from "../assets/images/icon-order-confirmed.svg"; // green tick image

export default function OrderConfirmationModal({ cart, total, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={checkIcon} alt="Order confirmed" className="check-icon" />
        <h2>Order Confirmed</h2>
        <p className="thanks">We hope you enjoy your food!</p>

        <div className="order-items">
          {cart.map((item) => (
            <div key={item.name} className="order-item">
              <div className="order-item-info">
                <strong>{item.name}</strong>
                <div className="order-item-meta">
                  <span>{item.quantity}x</span>
                  <span>@ ${item.price.toFixed(2)}</span>
                </div>
              </div>
              <span className="order-item-total">
                ${(item.quantity * item.price).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="order-total">
          <span>Order Total</span>
          <span className="total-amount">${total.toFixed(2)}</span>
        </div>

        <button className="new-order-btn" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
