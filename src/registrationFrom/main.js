// Creating H1
const headLine = document.createElement("h1");
headLine.textContent = "Astronaut Bachelor Degree";
document.body.append(headLine);

// Creating Inputs
const inputNames = ["First Name", "Last Name", "Age", "Email", "State", "City"];
const inputList = [];
for (let i = 0; i < inputNames.length; i++) {
  const input = document.createElement("input");
  input.className = inputNames[i].charAt(0).toLowerCase() + inputNames[i].slice(1).replace(" ", "");
  input.placeholder = inputNames[i];
  document.body.append(input);
  inputList.push(input);
}

// Creating Select
const sexSelect = document.createElement("select");
const sexOptions = ["--Select Your Sex--", "Male", "Female"];
for (let i = 0; i < sexOptions.length; i++) {
  const option = document.createElement("option");
  option.value = sexOptions[i];
  option.textContent = sexOptions[i];
  sexSelect.add(option);
}
inputList[2].insertAdjacentElement("afterend", sexSelect);

//Creating Radio Button
const radioOptions = ["Receive Promotional Emails", "Do Not Receive Emails"];
const radioContainer = document.createElement("div");
for (let i = 0; i < radioOptions.length; i++) {
  const radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.name = "promotions";
  radioButton.value = radioOptions[i];
  radioButton.id = radioOptions[i].charAt(0).toLowerCase() + radioOptions[i].slice(1).replace(/ /g, "");
  const label = document.createElement("label");
  label.setAttribute("for", radioButton.id);
  label.textContent = radioOptions[i];
  radioContainer.append(radioButton, label);
}
document.body.append(radioContainer);

//Creating Submit Button
const submitValues = {};
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
document.body.append(submitButton);

//Event
submitButton.addEventListener("click", function () {
  // Inputs
  inputList.forEach((input) => {
    submitValues[input.className] = input.value;
  });
  // Select
  submitValues["sex"] = sexSelect.value;
  // Radio
  submitValues["promotions"] = document.querySelector("input[type='radio']:checked").value;
  //Print
  console.log(submitValues);
});
