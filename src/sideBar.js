export function menu() {
  const sideBar = document.createElement("div");
  sideBar.classList.add("grid");

  const all = document.createElement("div");
  all.classList.add("grid-item");
  all.innerHTML = "All Tasks";
  sideBar.appendChild(all);

  const today = document.createElement("div");
  today.classList.add("grid-item");
  today.innerHTML = "Due Today";
  sideBar.appendChild(today);

  const week = document.createElement("div");
  week.classList.add("grid-item");
  week.innerHTML = "Due This Week";
  sideBar.appendChild(week);

  const project = document.createElement("div");
  project.classList.add("grid-item");
  project.innerHTML = "Projects";
  sideBar.appendChild(project);

  return sideBar;
}
