// 1.
const alertButton = document.querySelector(".alertButton");
alertButton.addEventListener("click", function () {
  alert(document.querySelector(".alertInput").value);
});

//2.
const mouseX = document.querySelector(".mouseX");
const mouseY = document.querySelector(".mouseY");
window.addEventListener("mousemove", (evt) => {
  mouseX.textContent = "" + evt.offsetX;
  mouseY.textContent = "" + evt.offsetY;
});

//3.
const picInput = document.querySelector(".picInput");
const picButton = document.querySelector(".picButton");
const image = document.querySelector(".image");
picButton.addEventListener("click", function () {
  image.setAttribute("src", picInput.value);
});

//4.
const arr = [1, 2, 50, 927, 1286, 0];
const arrayParagraph = document.querySelector(".arrayParagraph");
arrayParagraph.textContent = arr;
const removeButton = document.querySelector(".removeButton");
removeButton.addEventListener("click", function () {
  console.log(`You just removed ${arr.pop()} now the array holds ${arr}`);
  arrayParagraph.textContent = arr;
  if (arr.length === 0) {
    removeButton.setAttribute("disabled", "true");
  }
});

//5.
const colorButtons = document.querySelector(".colorButtons");
const bodyElement = document.querySelector("body");
for (const button of colorButtons.children) {
  button.setAttribute("style", "background-color:" + button.textContent.toLowerCase());
  button.addEventListener("click", function () {
    bodyElement.setAttribute("style", `background-color: ${button.textContent.toLowerCase()}`);
  });
}

//6.
const colorList = ["darkcyan", "purple", "burlywood", "royalblue"];
const backgroundColor = document.querySelector(".backgroundColor");

function changeColor(colors) {
  const index = Math.round(Math.random() * (colors.length - 1) + 1) - 1;
  backgroundColor.textContent = "Background-Color: " + colors[index];
  bodyElement.setAttribute("style", `background-color: ${colors[index]}`);
}

setInterval(changeColor, 2000, colorList);
