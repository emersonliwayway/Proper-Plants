// renders individual plant
// each plant gets add to cart button
// on click plant added to cart

export default function Plant({ plant, addToCart }) {
  return (
    <>
      <div className="plantDiv">
        <section className="plantPic">{plant.image}</section>
        <b>{plant.name}</b>
        <button onClick={() => addToCart(plant)}>Add to Cart</button>
      </div>
    </>
  );
}
