const addButton = document.querySelector("input[type='submit']");
const ul = document.querySelector("ul");
const taskInput = document.querySelector("#task-input");
let counter = 0;

// background API

// add item to list

function addItem(input) {
  if (input == "") {
    return;
  }
  const template = document.querySelector("#task-template");
  let templateClone = template.content.cloneNode(true);

  ul.appendChild(templateClone);

  let listItems = document.querySelectorAll(".task");
  let lastItem = listItems[listItems.length - 1];

  let label = lastItem.querySelector("label");

  label.textContent = input;
  lastItem.id = counter;
  taskInput.value = "";

  return document.querySelectorAll("li");
}

// check item once completed
function check(item) {
  item.parentElement.classList.toggle("completed");
  return item;
}

// remove item from list

function removeItem(item) {
  ul.removeChild(item);
  return ul;
}

// function filter() {
//     let itemsToFilter = Array.from(document.querySelectorAll("li"));
//     itemsToFilter.forEach((e) => { if (e.classList.contains("completed")) {
//         e.classList.toggle("hidden");
//     }
// })
// }

//EVENT LISTENERS

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  if ("content" in document.createElement("template")) {
    counter++;
    addItem(taskInput.value);
  }
});

ul.addEventListener("click", (event) => {
  const child = event.target;
  if (child.classList.contains("remove-btn")) {
    const parent = child.parentElement;
    console.dir(parent)
    removeItem(parent);
  }
  //console.dir(item);
  if (child.classList.contains("checkbox")) {
    check(child);
  }
});
