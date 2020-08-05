const taskForm = document.getElementById("create-task-form");
const taskDescription = document.getElementById("new-task-description");
// const taskPriority = document.getElementById("new-task-priority");
// const taskFilter = document.getElementById("new-task-filter");


document.addEventListener("DOMContentLoaded", () => {
  taskForm.addEventListener("submit", (e) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
    e.preventDefault();
  });
});
