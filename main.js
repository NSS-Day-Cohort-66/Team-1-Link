const materials = [
  "Hylian Rice", //0
  "Big Hearty Truffle", //1
  "Tabantha Wheat", //2
  "Raw Prime Meat", //3
  "Hateno Cheese", //4
  "Bird Egg", //5
  "Goat Butter", //6
  "Fresh Milk", //7
  "Cane Sugar", //8
  "Raw Bird Thigh", //9
];

// cook(materials[0],[1])
//}
//"meals" array to be populated by "cook" function

const meals = [];

// "ingredients" array to populated by (nothing at this time)
// const ingredients = [];

const mushroomRiceBalls = [materials[0], materials[1]];
const cheesyOmlette = [materials[4], materials[5]];
const cheeseHylianPizza = [materials[2], materials[5]];
const primeMeatandRiceBowl = [materials[3], materials[0]];
const eggPudding = [materials[7], materials[8], materials[5]];
const eggTart = [materials[2], materials[8], materials[6], materials[5]];
const chickenEggFriedRice = [materials[0], materials[3], materials[5]];
const poultryPilaf = [materials[0], materials[6], materials[5], materials[9]];

const cook = (recipeIngredients) => {
  if (
    recipeIngredients.includes("Hylian Rice") &&
    recipeIngredients.includes("Big Hearty Truffle")
  ) {
    meals.push("Mushroom Rice Balls");
    return;
  }
  if (
    recipeIngredients.includes("Hateno Cheese") &&
    recipeIngredients.includes("Bird Egg")
  ) {
    meals.push("Cheesy Omlette");
    return;
  }
  if (
    recipeIngredients.includes("Tabantha Wheat") &&
    recipeIngredients.includes("Bird Egg")
  ) {
    meals.push("Cheesy Hylian Pizza");
    return;
  }
  if (
    recipeIngredients.includes("Raw Prime Meat") &&
    recipeIngredients.includes("Hylian Rice")
  ) {
    meals.push("Prime Meat and Rice Bowl");
    return;
  }
  if (
    recipeIngredients.includes("Fresh Milk") &&
    recipeIngredients.includes("Cane Sugar") &&
    recipeIngredients.includes("Bird Egg")
  ) {
    meals.push("Egg Pudding");
    return;
  }
  if (
    recipeIngredients.includes("Tabantha Wheat") &&
    recipeIngredients.includes("Cane Sugar") &&
    recipeIngredients.includes("Goat Butter") &&
    recipeIngredients.includes("Bird Egg")
  ) {
    meals.push("Egg Tart");
    return;
  }
  if (
    recipeIngredients.includes("Hylian Rice") &&
    recipeIngredients.includes("Raw Prime Meat") &&
    recipeIngredients.includes("Bird Egg")
  ) {
    meals.push("Chicken Egg Fried Rice");
    return;
  }
  if (
    recipeIngredients.includes("Hylian Rice") &&
    recipeIngredients.includes("Goat Butter") &&
    recipeIngredients.includes("Bird Egg") &&
    recipeIngredients.includes("Raw Bird Thigh")
  ) {
    meals.push("Poultry Pilaf");
    return;
  }

  // something else besides return
  // if ingredients array includes recipe items as outlined above this function would push to meals
  // check ingredients array for specific ingredients using .includes()
  // if has ingredients, push the correct meal to the meal array
  // ? Should we Increment through arrays using materials.forEach() -NS
};

// cook(materials[0], materials[1]);
// cook(materials[4], materials[5]);
// cook(materials[2], materials[4]);
// cook(materials[3], materials[0]);
// cook(materials[], materials[]);
cook(cheesyOmlette);
cook(mushroomRiceBalls);
cook(cheeseHylianPizza);
cook(primeMeatandRiceBowl);
cook(eggPudding);
cook(eggTart);
cook(chickenEggFriedRice);
cook(poultryPilaf);

console.log("MEALS:");
console.log("---------------");
for (const meal of meals) {
  console.log(meal);
}

// What should the parameter(s) for the cook function be to account for any number of ingredients?
// The parameter will represent an array.
// How do we pass in the specific ingredients to the function?
// How can we check for the specific ingredients?
