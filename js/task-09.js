const colorCodeDisplay = document.querySelector(".color");
const colorChangeButton = document.querySelector(".change-color");
const body = document.body;

colorChangeButton.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorCodeDisplay.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
