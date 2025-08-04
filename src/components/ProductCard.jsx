import cartIcon from "../assets/images/icon-add-to-cart.svg";
import "../ProductCard.css";

export default function ProductCard({ product, cartItem, addToCart, updateQuantity }) {
  // Dynamically get the image path
  const imageSrc = new URL(`../assets/images/${product.image.thumbnail}`, import.meta.url).href;

  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={imageSrc} alt={product.name} className={`product-img ${cartItem ? "selected-img" : ""}`} />
        
        {cartItem ? (
          <div className="quantity-control">
            <button onClick={() => updateQuantity(product.name, -1 )}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => updateQuantity(product.name, 1 )}>+</button>
          </div>
        ) : (
          <button className="add-btn" onClick={() => addToCart(product)}>
            <img src={cartIcon} alt="" className="add-icon" />
            Add to Cart
            </button>
        )}
      </div>

      <p className="category"> {product.category} </p>
      <h2 className="name"> {product.name} </h2>
      <p className="price">${product.price.toFixed(2)} </p>
    </div>
  );
}
