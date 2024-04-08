let inputBox = document.getElementById("validation-input");
let dataLength = inputBox.getAttribute("data-length");

inputBox.addEventListener("blur", (event) => {
  const inputValue = event.target.value;

  if (inputValue.length === parseInt(dataLength)) {
    inputBox.classList.add("valid");
    inputBox.classList.remove("invalid");
  } else {
    inputBox.classList.remove("valid");
    inputBox.classList.add("invalid");
  }
});
