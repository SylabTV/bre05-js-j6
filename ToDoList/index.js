let todos = [];

window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const text = input.value.trim();
        if (text === "") return;

        addTodo(text);
        input.value = "";
    });

    function addTodo(text) {
        const li = document.createElement("li");
        li.classList.add("todo-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("todo-checkbox");

        const span = document.createElement("span");
        span.classList.add("todo-text");
        span.textContent = text;

        const button = document.createElement("button");
        button.classList.add("delete-btn");
        button.textContent = "Supprimer";

        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed");
        });

        button.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);

        list.appendChild(li);
    }
});
