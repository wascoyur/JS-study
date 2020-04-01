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
  let expensesAmount = 0; /*  */

// ------------functions------------

function calculateExpensesMonth(a, b) {
  /* считает сумму всех обязательных расходов за месяц */
  result = 0;
  arrCategoryAndExpenses.forEach((value, key) => {
    result += Number(value);
  });
  return result;
};
function getTargetMonth() {
  /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
   let result = Math.ceil(mission/accumulatedMonth)
  return result
};
function getAccumulatedMonth() {
  /* возвращает Накопления за месяц (Доходы минус расходы) */
  return money - calculateExpensesMonth();
};
function output(comment ='', value = ''){/* вывод единичных значений */
  document.writeln(`${comment} ${value} <br \/>`);
  console.log(`${comment} ${value}`);

};

let start = function(inputMsg = "Ваш месячный доход?", hint = 33000) {
  /* функция старт из задания */
  let check;
  let result = 0;
  do {
    let tmp = prompt(inputMsg, hint);
    check = !isNaN(tmp) && !isNaN(parseFloat(tmp));
    if (check == true) {
      result = tmp;
      break;
    }
  } while (true);
  return result;
};

let getExpensesMonth = function() {/* ввод расходов и их величин */
  for (let index = 0; index < addExpenses.length; index++) {
  let msg = 'Введите обязательную статью расходов?';
  let expenses0 = prompt(msg, addExpenses[index]);/* категория расхода */
  msg = `Во сколько обойдется ${addExpenses[index]}?`
  let amount0 = start(msg, 9000); /* величина расхода */
  arrCategoryAndExpenses.set(expenses0, amount0);
  };
}

//-------functions end---------

money = start();
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую без пробелов",addExpenses).split(",");
deposit = confirm("Есть ли у вас депозит в банке?");
expensesAmount = getExpensesMonth();
accumulatedMonth = getAccumulatedMonth();
budgetMonth = accumulatedMonth;
budgetDay = Math.floor(accumulatedMonth/30);
targetMonth = getTargetMonth();

//======================lesson05===================

document.querySelector('#number-lesson').textContent = 'Lesson05';
document.writeln('<h1>Lesson05</h1>');

if (budgetDay > 1200) {
  output("У вас высокий уровень дохода");
} else if (budgetDay <= 1200 && budgetDay > 600) {
  output("У вас средний уровень дохода");
} else if (budgetDay >= 0 && budgetDay <= 600) {
  output("К сожалению у вас уровень дохода ниже среднего");
} else if (targetMonth < 0) {
  output ('Цель не будет достигнута.')
} else {
  output("Что-то пошло не так");
}



output('Количество категорий расходов:', arrCategoryAndExpenses.size);
output('Наименование категорий расходов: ', Array.from(arrCategoryAndExpenses.keys()));
output('Желаемая сумма накопления: ', mission)
output('Бюджет на месяц: ', budgetMonth)
output('Бюджет на день: ', budgetDay)
if(targetMonth > 0)output(`Цель будет достигнута за месяцев: `,monthCount);
