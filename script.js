let money = 2000,/* Месячный доход */
  income = 5000,/* дополнительный доход */
  addExpenses = ["одежда", "еда", "коммуналка"], /* категориии расходов */
  arrCategoryAndExpenses = new Map();/* категории расходв с суммами */
  deposit = true,/* наличие банковского вклада */
  mission = 50000,/* цель накопления */
  period = 8;
  let monthCount =0; /* за каой период будет достигнута цель */
  let accumulatedMonth =0; /* Накопления за месяц (Доходы минус расходы) */
  let budgetMonth = 0; /* бюджет на месяц (свободные деньги) */
// ------------functions------------

function getExpensesMonth(a, b) {
  /* возвращает сумму всех обязательных расходов за месяц */
  result = 0;
  arrCategoryAndExpenses.forEach((value, key) => {
    result += value;
  });
  return result;
};
function getTargetMonth() {
  /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
  return Math.ceil(mission/accumulatedMonth)
};

function getAccumulatedMonth() {
  /* возвращает Накопления за месяц (Доходы минус расходы) */
  return money - getExpensesMonth();
};

function output(comment ='', value = ''){/* вывод единичных значений */
  document.writeln(`${comment} ${value} <br \/>`);
  console.log(`${comment} ${value}`);

};

function summaryOtputTask(){/* вывод результирующих значений задачи */

}

function checkInput(input, inputType){/* проверка вводимых данных */
  let result = false;
  switch(inputType){
    case 'string':
      typeof input === inputType? (result = true):null;
      break;
    case 'number':
      typeof input === inputType ? (result = true) : null;
      break;
  }
  return result;
}

let start = function(){/* функция старт из задания */
let  = isNaN(money);

  do{
    money = prompt('Ваш месячный доход?', 33000);
    tmp = parseFloat(money);
    tmp = (parseFloat(money));

  }while(isNaN(parseFloat(money)))
  return money;
}

//-------functions end---------

// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(addExpenses.length);
// console.log(`Период равен ${period} месяцев`);
// console.log(`Цель заработать ${mission} "рублей/долларов/гривен/юани"`);

// for (let index = 0; index < addExpenses.length; index++) {
//   console.log(addExpenses[index].toLowerCase());
// }
// budgetDay = 30;
// console.log(`budgetDay = ${budgetDay}`);

//---lesson03-----



money = start();
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую без пробелов",addExpenses).split(",");
deposit = confirm("Есть ли у вас депозит в банке?");

for (let index = 0; index < addExpenses.length; index++) {/* ввод расходов и их величин через цикл */

  let expenses0 = prompt("Введите обязательную статью расходов?", addExpenses[index]);/* категория расхода */

  let amount0 = Number(prompt(`Во сколько обойдется ${addExpenses[index]}?`, 9000)); /* величина расхода */

  arrCategoryAndExpenses.set(expenses0, amount0);
}
accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth/30);
monthCount = Math.ceil(mission/accumulatedMonth);

//======================lesson05===================
//otput: typof(money, income, deposit)
      //- количество категорий расходов
      //- срок достижения миссии(месяцев)
      //- миссия(желаемая сума накоплений)
      //- бюджет на день
      //- бюджет на месяц
      //- статус ваших доходов
document.querySelector('#number-lesson').textContent = 'Lesson05';
document.writeln('<h1>Lesson05</h1>');

if (budgetDay > 1200) {
  output("У вас высокий уровень дохода");
} else if (budgetDay <= 1200 && budgetDay > 600) {
  output("У вас средний уровень дохода");
} else if (budgetDay >= 0 && budgetDay <= 600) {
  output("К сожалению у вас уровень дохода ниже среднего");
} else {
  output("Что-то пошло не так");
}



output('Количество категорий расходов:', arrCategoryAndExpenses.size);
output('Наименование категорий расходов: ', Array.from(arrCategoryAndExpenses.keys()));
output('Желаемая сумма накопления: ', mission)
output('Бюджет на месяц: ', acc)
output('Бюджет на день: ', budgetDay)
output(`Цель будет достигнута за месяцев: `,monthCount);
