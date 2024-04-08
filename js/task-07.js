let sizeControl = document.getElementById("font-size-control");
let text = document.getElementById("text");

sizeControl.addEventListener("input", () => {
  text.style.fontSize = `${sizeControl.value}px`;
});
