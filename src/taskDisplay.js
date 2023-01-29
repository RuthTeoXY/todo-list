import deletePic from "./delete.png";
import { deleteData, doneTask } from "./storeData";

export function createTasks(title, description, dueDate, priority) {
  return { title, description, dueDate, priority };
}

export function displayTasks() {
  const parent = document.querySelector(".allTask");
  for (let i = parent.childNodes.length; i > 1; i--) {
    parent.removeChild(parent.lastChild);
  }

  const allTask = localStorage.getItem("task");
  const allObj = JSON.parse(allTask);
  if (allObj != null) {
    const numTask = allObj.length;

    for (let i = 0; i < numTask; i++) {
      let x = allObj[i];
      console.log(x);

      const aTask = document.createElement("div");
      aTask.classList.add("task");

      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.addEventListener("change", function (event) {
        this.parentNode.classList.toggle("checked");
        doneTask(event);
      });
      aTask.appendChild(checkBox);
      if (x.done === "done") {
        aTask.classList.add("checked");
        checkBox.checked = true;
      }

      const taskDetails = document.createElement("div");
      taskDetails.classList.add("taskDetails");
      aTask.appendChild(taskDetails);

      const title = document.createElement("div");
      title.classList.add("title");
      title.innerHTML = x.title;
      taskDetails.appendChild(title);

      const description = document.createElement("div");
      description.classList.add("description");
      description.innerHTML = x.description;
      description.style.display = "none";
      taskDetails.appendChild(description);

      taskDetails.addEventListener("click", function () {
        const description = this.children[1];
        console.log(description.style.display);
        if (description.style.display !== "none") {
          description.style.display = "none";
        } else {
          description.style.display = "block";
        }
      });

      const dueDate = document.createElement("div");
      dueDate.innerHTML = x.dueDate;
      aTask.appendChild(dueDate);

      const deleteTask = new Image();
      deleteTask.src = deletePic;
      deleteTask.addEventListener("click", function (event) {
        console.log(event);
        deleteData(event);
        this.parentElement.remove();
      });
      aTask.appendChild(deleteTask);

      parent.appendChild(aTask);
    }
  }
}
