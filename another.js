"use strict";
let dt = new Date('2020-03-30');
let sw = 'ru';
document.querySelector('#switcher').textContent = sw;
document.querySelector('#screen').textContent = dt;
let result = document.querySelector("#result-if");
if (sw === "ru") {
  result.textContent = getWeekDayRu(dt).toUpperCase();
  console.log(`день недели: ${getWeekDayRu(dt).toUpperCase()}`);
} else {
  result.textContent = getWeekDayEn(dt).toUpperCase();
  console.log(`день недели: ${getWeekDayEn(dt).toUpperCase()}`);
}

function getWeekDayRu(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}
function getWeekDayEn(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}
//===========================Array=======

switch(sw){
    case('ru'):
        document.querySelector('#result-sw').textContent = getWeekDayRu(dt).toUpperCase();
        break;
    case ('en'):
        document.querySelector("#result-sw").textContent = getWeekDayEn(dt).toUpperCase();
        break
}
//=================Array2=====

let arrDays = [
    ["ВС","Sun"],
    ["ПН","Mon"],
    ["ВТ","Tue"],
    ["СР","Wed"],
    ["ЧТ","Thu"],
    ["ПТ","Fri"],
    ["СБ","Sat"]
];
let t = dt.getDay();
let d ='';
sw === 'ru'?
d = arrDays[t][0]: d = arrDays[t][1];
//   console.log(`d = ${d}`);
  document.querySelector('#result-arr').textContent = d;

//=======Task2=======

let namePerson = 'Петр';
function secChase(name){
name === 'Максим' ? console.log('Преподаватель') : console.log('студент');
}
namePerson === 'Артем'? console.log('директор'): secChase(namePerson)
