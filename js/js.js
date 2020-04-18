'use strict';
let todoControl = document.querySelector('.todo-control') /* форма */;
let headerInput = document.querySelector('.header-input') ;/* значения  */
let todoList = document.querySelector('.todo-list');/* дела  */
let todoCompleted = document.querySelector('.todo-completed');/* выполненные дела  */

let todoData = [
    // {
    //     value: 'one',
    //     completed: false
    // },
    // {
    //     value: 'two',
    //     completed: false
    // },
    // {
    //     value: 'three',
    //     completed: false
    // }
    // ,
    // {
    //     value: 'qwe',
    //     completed: false
    // }
    // ,
    // {
    //     value: 'гоне',
    //     completed: false
    // }
    // ,
    // {
    //     value: 'жюбоо',
    //     completed: false
    // }
];
function readStorage(){
    if(localStorage.getItem('todo') ==='')return;
    let readD = localStorage.getItem('todo');
    readD = JSON.parse(readD);
    todoData = readD;
}
function setStorage() {
    let save = JSON.stringify(todoData)
    localStorage.setItem('todo', save);
}
const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoData.forEach(function(item, index){
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
          if (item.completed) {
              todoCompleted.append(li);
          }else{
             todoList.append(li);
          }
          const btnTodoCompleted = li.querySelector('.todo-complete');
          btnTodoCompleted.addEventListener("click", function () {
            item.completed = !item.completed;
            render();
          });
          const btnDel = li.querySelector('.todo-remove');
          btnDel.addEventListener('click',function(ev){
              todoData.splice(index,1);
              console.log(todoData.length);
              render();
          } )
    })
    setStorage();
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();
    let inp = headerInput.value
    headerInput.value ='';

    if(inp.trim() === '') return;
    const newTodo = {
      value: inp,
      completed: false,
    };
    todoData.push(newTodo);
    render();

} )
readStorage()
render();
