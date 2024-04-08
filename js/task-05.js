let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  if (event.target.value.trim() === "") {
    nameOutput.textContent == "Anonymous";
  } else {
    nameOutput.textContent = event.target.value;
  }
});
