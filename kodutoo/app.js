//dom elemendid ülesannete loomiseks ja nuppudeks
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const filterAll = document.getElementById("filterAll");
const filterCompleted = document.getElementById("filterCompleted");
const filterIncomplete = document.getElementById("filterIncomplete");
const sortTasks = document.getElementById("sortTasks");

let tasks = [];
let showCompleted = true;

addTaskButton.addEventListener("click", addTask);
filterAll.addEventListener("click", () => filterTasks("all"));
filterCompleted.addEventListener("click", () => filterTasks("completed"));
filterIncomplete.addEventListener("click", () => filterTasks("incomplete"));
sortTasks.addEventListener("click", sortTasksList);

//ül lisamine
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
  }
}

//ül valikud (nupud)
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add("completed");
    }

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed;
    if (task.completed) {
      completeButton.textContent = "Märgi tegemata";
    } else {
      completeButton.textContent = "Märgi tehtuks";
    }
    completeButton.addEventListener("click", () => toggleTaskCompletion(index));

    const editButton = document.createElement("button");
    editButton.textContent = "Muuda";
    editButton.addEventListener("click", () => editTask(index));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Kustuta";
    deleteButton.addEventListener("click", () => deleteTask(index));

    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

//ül muutmine pop upiga
function editTask(index) {
  const newText = prompt("Muuda ülesannet:", tasks[index].text);
  //pop upi seaded
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

//ül kustutamine
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

//näita ainult tehtud/tegemata
function filterTasks(status) {
  const filteredTasks = tasks.filter((task) => {
    if (status === "completed") return task.completed;
    if (status === "incomplete") return !task.completed;
    return true;
  });
  taskList.innerHTML = "";
  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add("completed");
    }

    //"tehtud" nupu seaded
    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed
      ? "Märgi tegemata"
      : "Märgi tehtuks";
    completeButton.addEventListener("click", () => toggleTaskCompletion(index));

    //muutmise nupu seaded
    const editButton = document.createElement("button");
    editButton.textContent = "Muuda";
    editButton.addEventListener("click", () => editTask(index));

    //kustutamise nupu seaded
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Kustuta";
    deleteButton.addEventListener("click", () => deleteTask(index));

    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

//ül järjestamine oleku põhjal
function sortTasksList() {
  tasks.sort((a, b) => {
    return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
  });
  renderTasks();
}
