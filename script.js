const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage or initialize with an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerText = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-button");

        deleteBtn.addEventListener("click", () => {
            deleteTask(index);
        });

        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Tugas Tidak Boleh Kosong!!!");
    } else {
        tasks.push(task);
        saveTasks();
        renderTasks();
        taskInput.value = "";
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

renderTasks();  
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
