const items = document.querySelectorAll(".item");
const search = document.querySelector("input");
const noElement = document.querySelector(".none");
let count = 0;
search.addEventListener("input", function (e) {
  items.forEach(function (item) {
    if (!item.textContent.includes(e.target.value)) {
      item.style.display = "none";
      count++;
    } else {
      noElement.style.display = "none";
      item.style.display = "flex";
      count = 0;
    }
    if (count === 3) {
      noElement.style.display = "flex";
    }
  });
});
