const inputAssignment = document.querySelector(".assignment-input");
const addButton = document.querySelector(".assignment-add");
addButton.addEventListener("click", function () {
  // Creating Elements
  const container = document.querySelector(".assignments");
  const article = document.createElement("article");
  const infoContainer = document.createElement("div");
  const assignment = document.createElement("h3");
  const assignmentStatus = document.createElement("h4");
  const assignmentTime = document.createElement("p");
  // Getting Assignment Value
  assignment.textContent = inputAssignment.value;
  // Reset Input Field
  inputAssignment.value = "";
  // Assignment Status
  assignmentStatus.textContent = "In Progress";
  // Setting Time
  assignmentTime.textContent = new Date().toLocaleString();
  // Adding Elements to Document
  infoContainer.append(assignment, assignmentStatus, assignmentTime);
  article.appendChild(infoContainer);
  container.appendChild(article);
  // Remove Button
  const buttonContainer = document.createElement("div");
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  buttonContainer.appendChild(removeButton);
  article.appendChild(buttonContainer);
  removeButton.addEventListener("click", function () {
    article.remove();
  });
});

// Setting Toggle Button
const toggle = document.querySelector(".toggle-colors");
let bool = false;
toggle.addEventListener("click", function () {
  bool = !bool;
  const assignments = document.querySelectorAll("article");
  let colors;
  if (bool) {
    colors = "background-color: black; color: white";
  } else {
    colors = "background-color: white; color: black";
  }
  for (const assignment of assignments) {
    assignment.setAttribute("style", colors);
  }
});
