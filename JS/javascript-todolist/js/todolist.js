const taskInput = document.getElementById("task");
const liveToastBtn = document.getElementById("liveToastBtn");
const list = document.getElementById("list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function loadTasks() {
  tasks.forEach(function (task) {
    const listItem = document.createElement("li");
    listItem.innerText = task;
    list.appendChild(listItem);
    createCloseButton(listItem);
  });
}

loadTasks();

function newElement() {
  if (taskInput.value.trim() === "") {
    showErrorToast();
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerText = taskInput.value;
  list.appendChild(listItem);
  createCloseButton(listItem);

  tasks.push(taskInput.value);
  saveTasks();

  showSuccessToast();

  taskInput.value = "";
}

function addCloseButtonToItems() {
    const listItems = document.querySelectorAll("ul#list>li");
    listItems.forEach(function (item) {
      if (!item.querySelector(".close-button")) {
        createCloseButton(item);
      }
  
      item.addEventListener("click", function (event) {
        if (!event.target.classList.contains("close-button")) {
          item.classList.toggle("checked");
        }
      });
    });
}
  
function createCloseButton(listItem) {
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.className = "close-button";
    listItem.appendChild(closeButton);
}
  
window.addEventListener("DOMContentLoaded", addCloseButtonToItems);
liveToastBtn.addEventListener("click", addCloseButtonToItems);

function createCloseButton(listItem) {
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.className = "close-button";
    listItem.appendChild(closeButton);
}

list.addEventListener("click", function (event) {
  const target = event.target;

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  } else if (target.className === "close-button") {
    const listItem = target.parentNode;
    const task = listItem.innerText;
    const index = tasks.indexOf(task);

    tasks.splice(index, 1);
    saveTasks();

    listItem.parentNode.removeChild(listItem);
  }
});

list.addEventListener("click", function (event) {
  const target = event.target;

  if (target.tagName === "LI") {
    target.classList.toggle("checked");
  }
});

function showSuccessToast() {
  const successToast = document.querySelector(".toast.success");
  const toast = new bootstrap.Toast(successToast);
  toast.show();
}

function showErrorToast() {
  const errorToast = document.querySelector(".toast.error");
  const toast = new bootstrap.Toast(errorToast);
  toast.show();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
