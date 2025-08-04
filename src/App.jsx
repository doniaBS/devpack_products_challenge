import { useState } from "react";
import products from "./data.json";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import './App.css'

export default function App() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find(item => item.name === product.name);
      if (found) {
        // If already in cart, increase quantity
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new product with quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove a product entirely from the cart
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter(item => item.name !== name));
  };

  // Update quantity by +1 or -1
  const updateQuantity = (name, change) => {
    setCart((prev) =>
      prev.map(item =>
        item.name === name
          ? { ...item, quantity: item.quantity + change }
          : item
      ).filter(item => item.quantity > 0) // remove if quantity is 0
    );
  };

  const clearCart = () => setCart([]);

  return (
    <div className="container">
      <div className="products-section">
        <h1>Desserts</h1>
        <div className="products-grid">
          {products.map((p) => (
            <ProductCard
              key={p.name}
              product={p}
              cartItem={cart.find(item => item.name === p.name)}
              addToCart={addToCart}
              updateQuantity={updateQuantity}

            />
          ))}
        </div>
      </div>

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
    </div>
  );
}
