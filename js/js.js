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
    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML =
          '<span class="text-todo">' +
          item.value +
          "</span>" +
          '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
          '</div>';
        todoList.append(li);
    })
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    const newTodo = {
      value: headerInput.value,
      completed: false,
    };
    todoData.push(newTodo);
    render();
} )
