const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();

  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    alert("All fields must be filled in.");
    return;
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}
