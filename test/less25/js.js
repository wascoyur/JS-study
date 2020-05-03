'use strict';

let lessons = document.querySelectorAll('section');
let choseLesson = document.querySelector('select').options;
// let options = document.querySelector
lessons.forEach((elem)=>{
    // elem.style.display = 'none';
    let newOption = elem.getAttribute('id');
    // choseLesson.append(newOption);
})

//lesson25
document.addEventListener('DOMContentLoaded', () =>{
    const select = document.getElementById('cars');
    const output = document.getElementById('output');

    select.addEventListener('change', () =>{
        const request = new XMLHttpRequest();
        request.open = ("GET", "https://jsonplaceholder.typicode.com/todos");
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.addEventListener('redystatechange', (event) =>{
            console.log(request.readyState);
        })
    })
})
