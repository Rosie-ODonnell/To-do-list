const form = document.querySelector("form");
const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("button");
const ul = document.querySelector("ul");
const task = document.querySelector("#task");
const checkBox = document.querySelector(".checkbox");

// background API

// add item to list

function addItem(input) {
  if (input == "") {
    return;
  }
  const template = document.querySelector("#task-template");
  const templateClone = template.content.cloneNode(true);
  ul.appendChild(templateClone);

  let = listItems = document.querySelectorAll("li");
  let lastItem = listItems[listItems.length - 1];

  let label = lastItem.querySelector("label");

  label.textContent = input;

  task.value = "";
}

// check item once completed
function check(item) {
  item.parentElement.classList.toggle("completed");
  return item;
}

// remove item from list

function removeItem(item) {
  ul.removeChild(item);
}

//EVENT LISTENERS

addButton.addEventListener("click", () => {
  event.preventDefault();
  if ("content" in document.createElement("template")) {
    addItem(task.value);
  }
});

ul.addEventListener("click", (event) => {
  item = event.target;
  console.dir(item);
  if (item.classList.contains("checkbox")) {
    check(item);
  } else {
    if ((item.type = "button")) {
      removeItem(item.parentElement);
    }
  }
});
