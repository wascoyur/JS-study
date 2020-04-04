let money = 2000,/* Месячный доход */
  income = 5000,/* дополнительный доход */
  listExpenses = ["одежда", "еда", "коммуналка"], /* список категориии расходов */
  arrCategoryAndExpenses = new Map();/* категории расходов с суммами */
  deposit = true,/* наличие банковского вклада */
  mission = 50000,/* цель накопления */
  period = 8;
  let monthCount =0; /* за какой период будет достигнута цель */

  let budgetMonth = 0; /* бюджет на месяц (свободные деньги) */
  let expensesAmount = 0; /*  */
  let appData = {
    budget: 0,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    calculateAccumulatedMonth () {/* Накопления за месяц (Доходы минус расходы) */
      this.budgetMonth = this.budget - calculateExpensesMonth();
    },
    calculateBudgetDay(){
      let accum = this.calculateAccumulatedMonth();
      this.budgetDay = Math.floor(this.budgetMonth/30)
    },
  }

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
   let result = Math.ceil(mission/appData.calculateAccumulatedMonth)
  return result
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
  for (let index = 0; index < listExpenses.length; index++) {
  let msg = 'Введите обязательную статью расходов?';
  let expenses0 = prompt(msg, listExpenses[index]);/* категория расхода */
  msg = `Во сколько обойдется ${listExpenses[index]}?`
  let amount0 = start(msg, 9000); /* величина расхода */
  arrCategoryAndExpenses.set(expenses0, amount0);
  };
}

//-------functions end---------

money = start();
appData.budget = money;
listExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую без пробелов", listExpenses).split(",");
deposit = confirm("Есть ли у вас депозит в банке?");
appData.calculateAccumulatedMonth();
expensesAmount = getExpensesMonth();
// accumulatedMonth = calculateAccumulatedMonth();
// budgetMonth = accumulatedMonth;

let targetMonth = getTargetMonth();

//======================lesson05===================

document.querySelector('#number-lesson').textContent = 'Lesson05';
document.writeln('<h1>Lesson05</h1>');

if (appData.calculateBudgetDay() > 1200) {
  output("У вас высокий уровень дохода");
} else if (appData.budgetDay <= 1200 && appData.budgetDay > 600) {
  output("У вас средний уровень дохода");
} else if (appData.budgetDay >= 0 && appData.budgetDay <= 600) {
         output("К сожалению у вас уровень дохода ниже среднего");
       } else if (targetMonth < 0) {
         output("Цель не будет достигнута.");
       } else {
         output("Что-то пошло не так");
       }



output('Количество категорий расходов:', arrCategoryAndExpenses.size);
output('Наименование категорий расходов: ', Array.from(arrCategoryAndExpenses.keys()));
output('Желаемая сумма накопления: ', mission)
output("Бюджет на месяц: ", appData.budgetMonth);
output("Бюджет на день: ", appData.budgetDay);
if(targetMonth > 0)output(`Цель будет достигнута за месяцев: `,targetMonth);
