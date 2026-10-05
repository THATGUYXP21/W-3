console.log("This is connected!! Hey CLL");

const userComment = '<p class="intro">Your site has been hadcked!</p>';
console.log(document.querySelector(".intro"));

const newListItem = "<li class='item'>Watermelons</li>";

document.querySelector("#list").innerHTML += newListItem;

console.log(document.querySelector(".fakeItem")?.textContent);

const h1 = document.getElementById("title");
h1.textContent = "My New List";

const intro = document.querySelector(".intro");
intro.textContent = "This is my new introduction paragraph.";

const list = document.getElementById("list");
list.innerHTML += "<li>Grapes</li>";

const container = document.getElementById("container");

const card = document.createElement("div");
card.className = "card";

const name = document.createElement("h3");
name.textContent = "Cam's List";
card.appendChild(name);
container.appendChild(card);
const food = document.createElement("p");
food.textContent = "My favorite food is pizza.";
const img = document.createElement("img");
img.src = "images.jpg";
img.alt = "Pizza";
card.appendChild(food);
card.appendChild(img);
card.append(name, food, img);
container.append(card);

const addFruitsButton = document.querySelector("#addFruits");
addFruitsButton.addEventListener("click", addFruits);
function addFruits() {
  document.querySelector("#list").innerHTML += newListItem;
}

const counter = document.createElement("div");
counter.id = "counter";

const counterDisplay = document.createElement("p");
counterDisplay.textContent = "0";

const clickButton = document.createElement("button");
clickButton.textContent = "Click Here";

const moreButton = document.createElement("button");
moreButton.textContent = "Mouseover";
const mouseoverBoverButton = document.createElement("button");
mouseoverBoverButton.textContent = "Mouseover Button";

let count = 0;
clickButton.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
moreButton.addEventListener("mouseover", () => {
  count++;
  counterDisplay.textContent = count;
});

function updateCounter() {
  counterDisplay.textContent = count;
}

counter.append(counterDisplay, clickButton, moreButton, mouseoverBoverButton);

document.body.append(counter);

moreButton.addEventListener("mouseover", updateCounter);
mouseoverBoverButton.addEventListener("mouseover", updateCounter);

const todo = [
  {
    text: "Buy some DBZ cards",
    completed: false,
  },
  {
    text: "Listen to some music",
    completed: false,
  },
  {
    text: "Work on a Mod for a game",
    completed: true,
  },
];

const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoError = document.getElementById("todoError");
const itemsLeft = document.getElementById("itemsLeft");

function renderTodos() {
  todoList.innerHTML = "";
  let itemsLeftCount = 0;
  todo.forEach(function (todo) {
    const todoElement = document.createElement("li");
    todoElement.textContent = todo.text;
    if (!todo.completed) {
      itemsLeftCount++;
      console.log(itemsLeftCount);
    }
    todoList.appendChild(todoElement);
  });
  itemsLeft.textContent = `Items left: ${itemsLeftCount}`;
  completedList.innerHTML = "";
  todo.forEach(function (todo) {
    if (todo.completed) {
      const todoElement = document.createElement("li");
      todoElement.textContent = todo.text;
      completedList.appendChild(todoElement);
    }
  });
}
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTodoText = todoInput.value.trim();
  if (newTodoText === "") {
    document.getElementById("todoError").textContent = "Please enter a task";
    return;
  }
  todo.push({
    text: todoInput.value.trim(),
    completed: false,
  });

  renderTodos();
});
renderTodos();

todoList.appendChild(li);

// const remaining = todos.filter(function(todo) { 
//   return !todo.completed;   
// }).length;

// const remaining = todo.filter((todo) => !todo.completed).length;
