import "./style.css";
import { menu } from "./sideBar.js";
import { createTasks, displayTasks } from "./taskDisplay.js";
import { newTask } from "./createTask.js";

const parent = document.querySelector("#content");

function mainPage() {
  const container = document.createElement("div");

  const header = document.createElement("div");
  header.classList.add("header");
  header.innerHTML = "Winning at life, one tasks at a time!";
  container.appendChild(header);

  const mainBody = document.createElement("div");
  mainBody.classList.add("mainBody");
  mainBody.appendChild(menu());

  const allTask = document.createElement("div");
  allTask.classList.add("allTask");
  mainBody.appendChild(allTask);

  const addTask = document.createElement("button");
  addTask.classList.add("btn");
  addTask.innerHTML = "New Task";
  allTask.appendChild(addTask);
  const modal = newTask();
  addTask.appendChild(modal);

  addTask.onclick = function () {
    modal.style.display = "block";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // allTask.appendChild(displayTasks(firstTask));
  // allTask.appendChild(displayTasks(secondTask));

  container.appendChild(mainBody);
  return container;
}

parent.appendChild(mainPage());
displayTasks();
