// use item component to render each cart item

import Item from "./Item";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <>
      {cart.map((item) => {
        return (
          <div key={item.id} className="cartDiv">
            <Item
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
        );
      })}
    </>
  );
}
