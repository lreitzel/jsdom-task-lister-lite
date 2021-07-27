document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", () => {
    event.preventDefault();
    const userInput = document.getElementById("new-task-description").value;
    const newTask = document.createElement("li")
    newTask.innerText = userInput
    const taskList = document.getElementById("tasks")
    taskList.append(newTask)
    event.target.reset()
  })

});
