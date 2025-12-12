import { useState, useEffect } from "react";
import CartList from "./CartList";

export default function CartApp() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const handler = () => {
      const saved = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(saved);
    };
    window.addEventListener("cartUpdated", handler);
    return () => window.removeEventListener("cartUpdated", handler);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <div>
      <CartList items={cart} onRemove={removeItem} />
      <h3 className="totalCost">Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
