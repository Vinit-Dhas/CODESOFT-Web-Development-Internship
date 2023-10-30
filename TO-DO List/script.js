const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(listItem);

    taskInput.value = "";

    listItem.querySelector(".delete").addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    listItem.querySelector(".edit").addEventListener("click", () => {
        const newText = prompt("Edit task:", taskText);
        if (newText !== null) {
            listItem.querySelector("span").textContent = newText;
        }
    });
});
