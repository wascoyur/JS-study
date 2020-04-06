let money = 2000; /* Месячный доход */

let appData = {
  budget: 0,
  income: newMap() ,              /* дополнительный доход ( вид дохода : размер доход )*/
  arrCategoryAndExpenses: new Map(/* [["одежда", 0],[ "еда",0], ["коммуналка",0]] */) /* категории расходов с суммами */,
  perid: 0,
  period: 8,
  targetMonth: 0 /* за какой период будет достигнута цель */,
  mission: 50000 /* цель накопления */,
  budgetDay: 0,
  budgetMonth: 0 /* бюджет на месяц (свободные деньги) */,
  expensesMonth: 0 /* суммарые расходы на месяц */,
  deposit: false,
  deposiSize : 0,
  persentOfDeposut: 7,
  getBudget() {
    /* вычисление Накопления за месяц (Доходы минус расходы) */
    this.budgetMonth = this.budget - this.calculateExpensesMonth();
  },
  calculateBudgetDay() {
    this.getBudget();
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  },
  askExpensesList() {//TODO разбить метод на 2 модуля: ввод данных и проверка
    /* ввод расходов и их величин */
    let exit = false;
    let i = 0;
    do {
      let msgExp =
        "Введите обязательную статью расходов? Предлагаемые можно изменить";
      let msgAmo = "";
      let hint = ""; /* подсказка для облегчения ввода */
      let itemExpenses; /* категория расхода */
      let itemExpensesAmount; /* величина расхода */

      itemExpenses = prompt(msgExp, hint);

      itemExpensesAmount = start(
        `Во сколько обойдется ${itemExpenses}?`,
        this.arrCategoryAndExpenses.get(itemExpenses)
      );
      if (
        !this.arrCategoryAndExpenses.get(itemExpenses) &&
        itemExpenses != "" &&
        !this.arrCategoryAndExpenses.get(itemExpenses) !== itemExpensesAmount
      ) {
        this.arrCategoryAndExpenses.set(itemExpenses, itemExpensesAmount);
      } else {
        output("Категория с такими значениями уже введена.", "");
        if (itemExpenses == "") {
          exit = confirm("Хотите закончить?");
        }
      }
    } while (!exit);
  },

  calculateExpensesMonth() {
    /* считает сумму всех обязательных расходов за месяц */
    result = 0;
    this.arrCategoryAndExpenses.forEach((value, key) => {
      result += Number(value);
    });
    return result;
  },
  calculateTargetMonth() {
    /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
    this.getBudget();
    let result = Math.ceil(this.mission / this.budgetMonth);
    this.targetMonth = result;
  },
  getStatusIncome() {
    if (appData.budgetDay > 1200) {
      output("У вас высокий уровень дохода");
    } else if (appData.budgetDay <= 1200 && appData.budgetDay > 600) {
      output("У вас средний уровень дохода");
    } else if (appData.budgetDay >= 0 && appData.budgetDay <= 600) {
      output("К сожалению у вас уровень дохода ниже среднего");
    }
  },
  getInfoDeposit(){             /* запрос данных о наличии депозита и его условиях */

  },
  calcSaveMoney(){

  },
  calculateAll() {
    this.calculateExpensesMonth();
    this.getBudget();
    this.calculateBudgetDay();
    this.calculateTargetMonth();
    this.getStatusIncome;
  },
};

// ------------functions------------

function output(comment = "", value = "") {
  /* вывод единичных значений */
  document.writeln(`${comment} ${value} <br \/>`);
  console.log(`${comment} ${value}`);
}

let start = function (inputMsg = "Ваш месячный доход?", hint = 33000) {
  //TODO вывести функцию ввода данных в другое место. Ввод и валидация - разные функции
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

//-------functions end---------

money = start();
appData.budget = money;
deposit = confirm("Есть ли у вас депозит в банке?");
appData.askExpensesList();
appData.getBudget();
appData.calculateAll();

document.querySelector("#number-lesson").textContent = "Lesson05";
document.writeln("<h1>Lesson05</h1>");

const value = (object) => {
  let str = "";
  Object.keys(object).map((el) => {
    let type = typeof object[el];
    if (object[el] == "") {
      return;
    }
    if (type == "function") {
      output(`ключ ${el} -  `, `метод`);
    } else {
      output(`ключ ${el} имеет значение ${object[el]}`);
    }
  });
  // return str;
};
output("Наша программа включает в себя данные:", "");
output("", value(appData));
output("Количество категорий расходов:", appData.arrCategoryAndExpenses.size);
output(
  "Наименование категорий расходов: ",
  Array.from(appData.arrCategoryAndExpenses.keys())
);
output("Желаемая сумма накопления: ", appData.mission);
output("Бюджет на месяц: ", appData.budgetMonth);
output("Бюджет на день: ", appData.budgetDay);

if (appData.targetMonth > 0) {
  output(`Цель будет достигнута за месяцев: ${appData.targetMonth}`);
}
