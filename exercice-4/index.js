let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm_password");
let form = document.querySelector("#signup-form");

form.addEventListener("submit", function(e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");

    password.classList.remove("valid");
    confirmPassword.classList.remove("valid");
    console.log("Les mots de passe ne correspondent pas.");
  } else {
    password.classList.add("valid");
    confirmPassword.classList.add("valid");
    
    password.classList.remove("invalid");
    confirmPassword.classList.remove("invalid");
    console.log("Formulaire soumis avec succès !");
  }
});
