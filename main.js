const materials = [
  "Hylian Rice",
  "Big Hearty Truffle",
  "Tabantha Wheat",
  "Raw Prime Meat",
  "Hateno Cheese",
  "Bird Egg",
];

//"meals" array to be populated by "cook" function
const meals = [];

const cook = (firstIngredient, secondIngredient) => {
  if (
    firstIngredient === "Hylian Rice" &&
    secondIngredient === "Big Hearty Truffle"
  ) {
    meals.push("Mushroom Rice Balls");
  }
  if (firstIngredient === "Hateno Cheese" && secondIngredient === "Bird Egg") {
    meals.push("Cheesy Omlette");
  }
  if (
    firstIngredient === "Tabantha Wheat" &&
    secondIngredient === "Hateno Cheese"
  ) {
    meals.push("Cheesy Hylian Pizza");
  }
  if (
    firstIngredient === "Raw Prime Meat" &&
    secondIngredient === "Hylian Rice"
  ) {
    meals.push("Prime Meat and Rice Bowl");
  }
};

cook(materials[0], materials[1]);
cook(materials[4], materials[5]);
cook(materials[2], materials[4]);
cook(materials[3], materials[0]);
// cook(materials[], materials[]);

console.log("MEALS:");
console.log("---------------");
for (const meal of meals) {
  console.log(meal);
}
