import { storeData } from "./storeData.js";

export function newTask() {
  const newT = document.createElement("form");
  newT.onsubmit = storeData;
  newT.classList.add("modal-content");

  newT.setAttribute("action", "");
  newT.setAttribute("method", "get");

  const title = document.createElement("div");
  newT.appendChild(title);
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.innerHTML = "Title";
  title.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("placeholder", "eg. Buy Groceries");
  title.appendChild(titleInput);

  const desc = document.createElement("div");
  newT.appendChild(desc);
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.innerHTML = "Details";
  desc.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute(
    "placeholder",
    "eg. Buy chicken breast, paprika, cabbage, grapes"
  );
  desc.appendChild(descriptionInput);

  const priority = document.createElement("div");
  newT.appendChild(priority);
  const prioritylbl = document.createElement("label");
  prioritylbl.setAttribute("for", "priority");
  prioritylbl.innerHTML = "Priority";
  priority.appendChild(prioritylbl);

  const prioritySel = document.createElement("select");
  prioritySel.setAttribute("id", "priority");
  prioritySel.setAttribute("name", "priority");
  prioritySel.setAttribute("size", "3");
  priority.appendChild(prioritySel);

  const low = document.createElement("option");
  low.setAttribute("value", "low");
  low.innerHTML = "low";
  prioritySel.appendChild(low);
  const med = document.createElement("option");
  med.setAttribute("value", "med");
  med.innerHTML = "med";
  prioritySel.appendChild(med);
  const high = document.createElement("option");
  high.setAttribute("value", "high");
  high.innerHTML = "high";
  prioritySel.appendChild(high);

  const dueDate = document.createElement("div");
  newT.appendChild(dueDate);
  const dueDatelbl = document.createElement("label");
  dueDatelbl.setAttribute("for", "dueDate");
  dueDatelbl.innerHTML = "Due By:";
  dueDate.appendChild(dueDatelbl);

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("id", "dueDate");
  dueDateInput.setAttribute("name", "dueDate");
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  dueDateInput.setAttribute("min", currentDate);
  dueDate.appendChild(dueDateInput);

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerHTML = "Done";
  newT.appendChild(submit);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.appendChild(newT);

  return modal;
}
