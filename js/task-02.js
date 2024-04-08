const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  let listItem = document.createElement("li");
  listItem.textContent = ingredient;
  ingredientList.append(listItem);
});

console.log(ingredientList);
