let color = document.getElementById("color");
let text =document.getElementById("text");
let div = document.querySelector("div");

text.addEventListener("input", function(){
    div.textContent = text.value;
    console.log(text.value);
});
color.addEventListener("input", function(){
    div.style.backgroundColor = color.value;
});