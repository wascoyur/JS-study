let money = 2000,/* Месячный доход */
  income = 5000,/* дополнительный доход */
  addExpenses = ["одежда", "еда", "коммуналка"], /* категориии расходов */
  arrCategoryAndExpenses = new Set();/* категории расходв с суммами */
  deposit = true,/* наличие банковского вклада */
  mission = 50000,/* цель накопления */
  period = 8;
  let monthCount =''; /* за каой период будет достигнута цель */

// ------------functions------------

function getExpensesMonth(a, b) {
  /* возвращает сумму всех обязательных расходов за месяц */
  return amount0 + amount1;
};
function getTargetMonth() {
  /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
  return Math.ceil(mission/accumulatedMonth)
};

function getAccumulatedMonth() {
  /* возвращает Накопления за месяц (Доходы минус расходы) */
  return money - (amount0 + amount1);
};

function output(comment, value){/* вывод единичных значений */
  document, writeln(`${comment} имеет заначение : ${value} <br \/>`);
};

function summaryOtputTask(){/* вывод результирующих значений задачи */

}

function checkInput(input, inputType){/* прверка вводимых данных */
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


//-------functions end---------

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} "рублей/долларов/гривен/юани"`);

for (let index = 0; index < addExpenses.length; index++) {
  console.log(addExpenses[index].toLowerCase());
}
budgetDay = 30;
console.log(`budgetDay = ${budgetDay}`);

//---lesson03-----

let budgetMonth;

money = Number(prompt("Ваш месячный доход?"));
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую без пробелов",addExpenses).split(",");
deposit = confirm("Есть ли у вас депозит в банке?");

for (let index = 0; index < addExpenses.length; index++) {/* ввод расходов и их величин через цикл */
  let expenses0 = prompt("Введите обязательную статью расходов?", addExpenses[index]);/* категория расхода */

  let amount0 = Number(prompt(`Во сколько обойдется ${addExpenses[index]}?`)); /* величина расхода */

  arrCategoryAndExpenses.add(expenses0, amount0);
}
monthCount = Math.ceil(mission / budgetMonth);

console.log(`цель будет достигнута за: ${monthCount} месяцев.`);
budgetDay = Math.floor(budgetMonth / 30);

if (budgetDay > 1200) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay <= 1200 && budgetDay > 600) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay >= 0 && budgetDay <= 600) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
  console.log("Что-то пошло не так");
}

//==================lesson04===================

let accumulatedMonth = getAccumulatedMonth();

budgetDay = Math.floor(accumulatedMonth/30);
document.writeln(`Ваш доход в месяц = ${money}<br \/>`);
document.writeln(`Сумма Ваших расходв в месяц = ${getExpensesMonth()}<br \/>`);
document.writeln(`Категории Ваших расходов = ${addExpenses}<br \/>`);
document.writeln(`Cрок достижения цели в месяцах = ${getTargetMonth()}<br \/>`);
document.writeln(`Бюджет на день = ${budgetDay}<br \/>`);

//======================lesson05===================
//otput: typof(money, income, deposit)
      //- количество категорий расходов
      //- срок достижения миссии(месяцев)
      //- миссия(желаемая сума накоплений)
      //- бюджет на день
      //- бюджет на месяц
document.writeln('<h1>Lesson05</h1>');
