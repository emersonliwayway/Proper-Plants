// renders each individual cart item, same as in plant.jsx
// adds buttons to increase/decrease quantity

export default function Item({ item, addToCart, removeFromCart }) {
  return (
    <>
      <div key={item.id} className="itemDiv">
        <span>
          {item.image} {item.name}
        </span>
        <span className="quantity">
          <button onClick={() => removeFromCart(item)}>-</button>
          {item.quantity} <button onClick={() => addToCart(item)}>+</button>
        </span>
      </div>
    </>
  );
}
