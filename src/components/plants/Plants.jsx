import Plant from "./Plant";

// displays all plants by mapping through plants array and using plant component to render
export default function Plants({ plants, addToCart }) {
  return (
    <>
      <div className="allPlants">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}
