// use item component to render each cart item

import Item from "./Item";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <>
      <h2>Cart</h2>
      {cart.map((item) => {
        return (
          <Item
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </>
  );
}
