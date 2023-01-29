import { displayTasks } from "./taskDisplay";
import { newTask } from "./createTask";

export function createTaskObj() {
  const form = document.getElementsByClassName("modal-content");
  const title = form[0].elements["title"].value;
  const description = form[0].elements["description"].value;
  const priority = form[0].elements["priority"].value;
  const dueDate = form[0].elements["dueDate"].value;
  const done = "";
  return { title, description, dueDate, priority, done };
}

export function storeData() {
  const items = (() => {
    const fieldValue = localStorage.getItem("task");
    return fieldValue === null ? [] : JSON.parse(fieldValue);
  })();
  items.push(createTaskObj());
  localStorage.setItem("task", JSON.stringify(items));
  displayTasks();
}

export function deleteData(event) {
  const taskTitle =
    event.target.parentElement.querySelectorAll(".title")[0].textContent;
  const fieldValue = localStorage.getItem("task");
  const items = JSON.parse(fieldValue);
  for (let i in items) {
    console.log(items[i]["title"]);
    if (items[i]["title"] === taskTitle) {
      const x = items.splice(i, 1);
    }
  }
  localStorage.setItem("task", JSON.stringify(items));
  displayTasks();
}

export function doneTask(event) {
  const taskTitle =
    event.target.parentElement.querySelectorAll(".title")[0].textContent;
  const fieldValue = localStorage.getItem("task");
  const items = JSON.parse(fieldValue);
  for (let i in items) {
    if (items[i]["title"] === taskTitle) {
      if (items[i]["done"] === "") {
        items[i]["done"] = "done";
      } else {
        items[i]["done"] = "";
      }
    }
  }
  localStorage.setItem("task", JSON.stringify(items));
}
