const parent = document.getElementById("parent");
const images = document.querySelectorAll(".image");

let selected = null;

// Event listener for the drag start event
parent.addEventListener("dragstart", (event) => {
  selected = event.target;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/html", selected.outerHTML);
});

// Event listener for the drag over event
parent.addEventListener("dragover", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("image")) {
    event.target.classList.add("selected");
  }
});

// Event listener for the drag leave event
parent.addEventListener("dragleave", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("image")) {
    event.target.classList.remove("selected");
  }
});

// Event listener for the drop event
parent.addEventListener("drop", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("image")) {
    event.target.insertAdjacentHTML("beforebegin", selected.outerHTML);
    selected.remove();
    event.target.classList.remove("selected");
  }
});