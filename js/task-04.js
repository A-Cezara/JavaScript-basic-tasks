const counter = document.getElementById("counter");
const counterValueSpan = document.getElementById("value");
let counterValue = 0;

function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}

function changeNumber(event) {
  const action = event.target.dataset.action;

  if (action === "increment") {
    counterValue++;
  } else if (action === "decrement") {
    counterValue--;
  }

  updateCounterValue();
}

counter.addEventListener("click", changeNumber);
