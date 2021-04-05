// Add tasks to a list so that I can keep track of them

test("item is successfully added to list when", () => {
  let input = "test item";
  let expectedLength = Array.from(document.querySelectorAll("li").length + 1);
  //let listItem = document.querySelector("li");
  addItem(input);
  let actual = Array.from(document.querySelector("ul"));

  equal(actual.length, expectedLength);
  equal(actual[actual.length - 1].label.textContent, input);
});

//Check things off my list so that I can see what I’ve done

test("item shows checked when checkbox clicked", () => {
  let expected = true;
  let checkboxInput = document.querySelector("input[type='checkbox']");
  check(checkboxInput);
  let actual = checkboxInput.checked;

  equal(actual, true);
  equal(item.parentElement.classList.toggle("completed"), true);
});

//Items deleted off my list when delete button clicked

test("when item is deleted, id cannot be found in list", () => {
  let expected = true;
  let listItemId = document.querySelector("li").id;
  removeItem(listItemId);
  let ul = Array.from(document.querySelector("ul"));
  let actual = ul.every((e) => e.id != listItemId);
  equal(actual, expected);
});

test("when item is deleted, length of list decreases by 1", () => {
  let expected = Array.from(document.querySelectorAll("li").length - 1);
  let listItem = document.querySelector("li");
  removeItem(listItem);
  let actual = Array.from(document.querySelectorAll("li"));
  equal(actual, expected);
});

//If empty string is passed, no new item is added
test("if empty string is passed, no item is added to list", () => {
    let input = "";
    let expected = Array.from(document.querySelectorAll("li").length);
    addItem(input);
    let actual = Array.from(document.querySelector("ul"));

    equal(actual, expected)


// equal test

const equal = (actual, expected, message) => {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error(`Fail: ${message || defaultMessage}`);
  }
};


// test skeleton

const test = (name, testFunction) => {
  console.group(name);
  testFunction();
  console.groupEnd(name);
};
