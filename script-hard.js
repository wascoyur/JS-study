let money = 2000,
  income = 5000,
  addExpenses = ["одежда", "еда", "коммуналка"],
  deposit = true,
  mission = 50000,
  period = 8;

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

money = Number(prompt("Ваш месячный доход?")); /* доходы  */
addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  addExpenses
).split(","); /* сприсок расходов */
deposit = confirm("Есть ли у вас депозит в банке?");
let expenses0 = prompt("Введите обязательную статью расходов?", addExpenses[0]);
let amount0 = Number(
  prompt(`Во сколько обойдется ${addExpenses[0]}?`)
); /* обязательный расход */
let expenses1 = prompt("Введите обязательную статью расходов?", addExpenses[1]);
let amount1 = Number(
  prompt(`Во сколько обойдется ${addExpenses[1]}?`)
); /* обязательный расход */
//budgetMonth = money - amount0 - amount1;
// console.log(`Бюджет на месяц ${budgetMonth}`);
let monthCount = Math.ceil(
  mission / budgetMonth
); /* за каой период будет достигнута цель */

console.log(`цель будет достигнута за: ${monthCount} месяцев.`);
budgetDay = Math.floor(budgetMonth / 30);

// console.log(`Бюджет на день ${budgetDay}`);

// if (budgetDay > 1200) {
//   console.log("У вас высокий уровень дохода");
// } else if (budgetDay <= 1200 && budgetDay > 600) {
//   console.log("У вас средний уровень дохода");
// } else if (budgetDay >= 0 && budgetDay <= 600) {
//   console.log("К сожалению у вас уровень дохода ниже среднего");
// } else {
//   console.log("Что-то пошло не так");
// }

//==================lesson04===================

function getExpensesMonth(a, b) {
  /* возвращает сумму всех обязательных расходов за месяц */
  return amount0 + amount1;
};

function getAccumulatedMonth() {
  /* возвращает Накопления за месяц (Доходы минус расходы) */
  return money - (amount0 + amount1);
};
let accumulatedMonth = getAccumulatedMonth();
function getTargetMonth() {
  /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
  return Math.ceil(mission/accumulatedMonth)
};
let getStstusIncome = function(){
  if(budgetDay < 300){
    return ('Низкий уровень дохода');
  }else if(budgetDay <= 800){
    return ('средний уровень дохода');
  }else{
    return ('Высокий уровень дохода');
  }
}
budgetDay = Math.floor(accumulatedMonth/30);
document.writeln(`Ваш доход в месяц = ${money}<br \/>`);
document.writeln(`Сумма Ваших расходов в месяц = ${getExpensesMonth()}<br \/>`);
document.writeln(`Категории Ваших расходов = ${addExpenses}<br \/>`);
document.writeln(`Cрок достижения цели в месяцах = ${getTargetMonth()}<br \/>`);
document.writeln(`Бюджет на день = ${budgetDay}<br \/>`);
document.writeln(`Статус дохода = ${getStstusIncome()}<br \/>`);
