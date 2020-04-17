'use strict';
let todoControl = document.querySelector('.todo-control') /* форма */;
let headerInput = document.querySelector('.header-input') ;/* значения  */
let todoList = document.querySelector('.todo-list');/* дела  */
let todoCompleted = document.querySelector('.todo-completed');/* выполненные дела  */
const todoData = [
    {
        value:'сварить кофе',
        completed: false
    },
    {
        value:'помыть посуду',
        completed: false
    }
];

const render = function(){
    todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">'+ item.value + '</span>';
    })
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    const newTodo = {
      value: "сварить кофе",
      completed: false,
    };
    todoData.push(newTodo);
} )
render();
