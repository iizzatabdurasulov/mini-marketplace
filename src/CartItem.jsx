export default function CartItem({ item, onRemove }) {
  return (
    <div className="cartItem">
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <p>${item.price} x {item.quantity}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}
