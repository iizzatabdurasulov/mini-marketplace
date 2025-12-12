import CartItem from "./CartItem";

export default function CartList({ items, onRemove }) {
  if (items.length === 0) return <p>Cart is empty.</p>;
  return (
    <div className="carts">
      {items.map(item => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
}
