let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.elements.identifiant.value);
  console.log(event.target.elements.password.value);
});