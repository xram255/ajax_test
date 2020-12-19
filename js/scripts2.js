//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener("click", addToDo);

//Functions
function addToDo(event)
{
    // Prevent form from submitting
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    //newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerText = ' + ';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //append to do list
    todoList.appendChild(todoDiv);


}