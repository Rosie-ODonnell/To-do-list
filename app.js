const form = document.querySelector("form");
//const addButton = form.querySelector("input [type='submit']");
const addButton = document.querySelector("#addButton");
const checkButton = document.querySelector("#checkbox");
const removeButton = document.querySelector("button");
const ul = document.querySelector("ul");
const task = document.querySelector("#task");

// background API

// add item to list

function addItem(input) {
  const template = document.querySelector("#task-template");
  const templateClone = template.content.cloneNode(true);
  ul.appendChild(templateClone);

  let = listItems = document.querySelectorAll("li");
  let lastItem = listItems[listItems.length - 1];

  let label = lastItem.querySelector("label");

  label.textContent = input;

  task.value = "";

}

addButton.addEventListener("click", () => {
  event.preventDefault();
  if ("content" in document.createElement("template")) {
    addItem(task.value);
  }
});

// check item once completed
// check() {

// }

// // remove item from list

// removeItem() {

// }
