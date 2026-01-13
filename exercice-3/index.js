let inputtext = document.querySelector("#inputText");
let select = document.querySelector("#slc");
let textarea = document.querySelector("#txtarea");

inputtext.addEventListener("input", event => {
  console.log(event.target.value);
});
select.addEventListener("change", event => {
  console.log(event.target.value);
});
textarea.addEventListener("input", event => {
  console.log(event.target.value);
});