let todosWrapper, addForm;

document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  todosWrapper = document.querySelector('.todos-wrapper');
  addForm = todosWrapper.querySelector('form');
  addForm.addEventListener('submit', onSumbit);
}

function onSumbit(event) {
  event.preventDefault();
  let addInput = addForm.querySelector('input:first-of-type');
  let todoText = addInput.value;
  if (todoText.length > 0) {
    addNewTodo(todoText);
  } else {
    alert("Podaj jaki tekst");
  }
}

function addNewTodo(text) {
  let todoElementNode = document.createElement('li');
  let labelNode = document.createElement('label');
  let inputNode = document.createElement('input');
  let textNode = document.createTextNode(text);
  let todosList = todosWrapper.querySelector('#todo-list .check-list');
  inputNode.type = "checkbox";

  labelNode.appendChild(inputNode);
  labelNode.appendChild(textNode);
  todoElementNode.appendChild(labelNode);
  todosList.appendChild(todoElementNode);

  addForm.reset();
}