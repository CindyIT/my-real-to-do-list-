const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');


// Load todos from local storage
const todos = JSON.parse(localStorage.getItem('todos'));


if (todos) {

    todos.forEach(todo => addTodo(todo));

}


form.addEventListener('submit', (e) => {

    e.preventDefault();  
    
    addTodo();  
});


function addTodo(todo = null) {

    let todoText = input.value;