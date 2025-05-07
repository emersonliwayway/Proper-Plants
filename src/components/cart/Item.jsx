// renders each individual cart item, same as in plant.jsx
// adds buttons to increase/decrease quantity

export default function Item({ item, addToCart, removeFromCart }) {
  return (
    <>
      <div key={item.id}>
        <span>
          {item.name}: {item.quantity}
        </span>
        <button onClick={() => addToCart(item)}>+</button>
        <button onClick={() => removeFromCart(item)}>-</button>
      </div>
    </>
  );
}
