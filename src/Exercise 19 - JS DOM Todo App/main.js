// Setting Color Toggle Button
function toggleColors() {
  const mode = "darkMode";
  const assignments = document.querySelectorAll("article");
  // Toggle DarkMode
  colorBool ? toggle.classList.add(mode) : toggle.classList.remove(mode);
  // Assignments DarkMode
  for (const assignment of assignments) {
    colorBool ? assignment.classList.add(mode) : assignment.classList.remove(mode);
  }
}

let colorBool = false;
const toggle = document.querySelector(".toggle-colors");
toggle.addEventListener("click", () => {
  colorBool = !colorBool;
  toggleColors();
});

// Setting Show Toggle Button
const showDone = document.querySelector(".toggle-done");
let showBool = true;
showDone.addEventListener("click", function () {
  showBool = !showBool;
  // Change Button Text
  showBool ? (showDone.textContent = "Show Done") : (showDone.textContent = "Show All");
  const unfinishedAssignments = document.querySelectorAll("article:not(.done)");
  for (const unfinished of unfinishedAssignments) {
    // Assign Display
    showBool ? (unfinished.style.display = "flex") : (unfinished.style.display = "none");
  }
});

// Setting Remove Button
function removeButton(assignmentContainer, buttonContainer) {
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  buttonContainer.appendChild(removeButton);
  assignmentContainer.appendChild(buttonContainer);
  removeButton.addEventListener("click", function () {
    assignmentContainer.remove();
  });
}

// Setting Done Button
function doneButton(assignmentContainer, buttonContainer) {
  const doneButton = document.createElement("button");
  doneButton.className = "done-button";
  buttonContainer.appendChild(doneButton);
  doneButton.addEventListener("click", function () {
    const done = "done";
    assignmentContainer.classList.contains(done) ? assignmentContainer.classList.remove(done) : assignmentContainer.classList.add(done);
    const unfinishedAssignments = document.querySelectorAll("article:not(.done)");
    if (unfinishedAssignments.length) {
      unfinishedAssignments[unfinishedAssignments.length - 1].insertAdjacentElement("afterend", assignmentContainer);
    }
    if (!assignmentContainer.classList.contains(done)) {
      unfinishedAssignments[0].insertAdjacentElement("beforebegin", assignmentContainer);
    }
  });
}

// Setting Assignment
const inputAssignment = document.querySelector(".assignment-input");
const addButton = document.querySelector(".assignment-add");
addButton.addEventListener("click", function () {
  //In case Input is empty
  if (!inputAssignment.value) {
    return;
  }
  // Creating Elements
  const mainContainer = document.querySelector(".assignments");
  const assignmentContainer = document.createElement("article");
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
  // Adding Elements to Div
  infoContainer.append(assignment, assignmentStatus, assignmentTime);
  // Adding Div to Article
  assignmentContainer.appendChild(infoContainer);
  if (!showBool) {
    assignmentContainer.style.display = "none";
  }
  // Check if there are existing Assignments
  const hasAssignment = document.querySelector("article");
  // If there are insert as first child, else insert normally
  //  Insert to Section
  hasAssignment ? mainContainer.insertBefore(assignmentContainer, hasAssignment) : mainContainer.appendChild(assignmentContainer);
  // Checking Toggle
  toggleColors();
  // Create Div for Assignment Buttons
  const buttonContainer = document.createElement("div");
  // Remove Button
  removeButton(assignmentContainer, buttonContainer);
  //  Done Button
  doneButton(assignmentContainer, buttonContainer);
});
