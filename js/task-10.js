const controls = document.querySelector("#controls");
const boxesContainer = document.querySelector("#boxes");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const input = controls.querySelector("input");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    alert("Enter a number between 1 and 100.");
    return;
  }
  boxesContainer.innerHTML = "";

  let initialDimension = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${initialDimension}px`;
    div.style.height = `${initialDimension}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(div);
    initialDimension += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
