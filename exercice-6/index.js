let text = document.getElementById("text");
let email = document.getElementById("email");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let form = document.querySelector("form");

form.addEventListener("submit", function(event){

    if (!checkbox.checked) {
        alert("Vous devez accepter les conditions générales d'utilisation.");
        console.log("Checkbox non cochée");
        event.preventDefault();
        return;
    }
    else {
        console.log("Checkbox cochée");
        alert ("Formulaire soumis avec succès !");
    }
});