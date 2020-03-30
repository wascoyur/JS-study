let money = 2000,
income = 5000,
addExpenses = ['интернет', 'такси', 'коммуналка'],
deposit = true,
mission = 50000,
period = 8;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} "рублей/долларов/гривен/юани"`);

for (let index = 0; index < addExpenses.length; index++) {
    console.log(addExpenses[index].toLowerCase());
}
budgetDay = 30;
console.log(`budgetDay = ${budgetDay}`);
//---lesson02-----
money = prompt('Ваш месячный доход?');
addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);

