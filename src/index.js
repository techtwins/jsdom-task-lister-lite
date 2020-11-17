document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener("submit", event => {
  event.preventDefault()  
  const desc = event.target["new-task-description"]
  const newTask = document.createElement("li")
  newTask.textContent = desc.value
  ul = document.querySelector("#tasks")
  ul.append(newTask)
  event.target.reset()
  })
});
