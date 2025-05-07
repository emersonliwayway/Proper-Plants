import { useState } from "react";
import PLANTS from "./data";
import Plants from "./components/plants/Plants";
import Cart from "./components/cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (plant) => {
    // check if plant is already in cart
    const inCart = cart.find((i) => i.id === plant.id);
    if (inCart) {
      setCart(
        cart.map((item) =>
          // if the item already is in cart, then create new object via spread with the item and its quantity + 1
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      // if the item is not in cart, create new object via spread and set item quantity to 1
    } else {
      const item = { ...plant, quantity: 1 };
      // after making new object, add it to the state array which is completely different from the original data array!
      setCart([...cart, item]);
    }
  };

  // remove from cart
  const removeFromCart = (plantToRemove) => {
    setCart(
      cart
        .map((item) =>
          // if item id = plant to remove id then decrease quantity by 1
          item.id === plantToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        // only show items that have a quantity greater than 0
        .filter((item) => item.quantity > 0)
    );
  };
  // renders individual components to page
  return (
    <>
      <Plants plants={PLANTS} addToCart={addToCart} />
      <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
    </>
  );
}
