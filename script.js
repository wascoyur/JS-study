let money = 2000,/* Месячный доход */
  income = 5000,/* дополнительный доход */

  period = 8;

  let appData = {
      budget: 0,
      arrCategoryAndExpenses :new Map([["одежда", 9000],[ "еда",13000], ["коммуналка",10000]]),/* категории расходов с суммами */
      perid:0,
      targetMonth:0,                                        /* за какой период будет достигнута цель */
      mission:50000,                                  /* цель накопления */
      budgetDay:0,
      budgetMonth:0,                                /* бюджет на месяц (свободные деньги) */
      expensesMonth:0,                              /* суммарые расходы на месяц */
      calculateAccumulatedMonth () {/* вычисление Накопления за месяц (Доходы минус расходы) */
        this.budgetMonth = this.budget - this.calculateExpensesMonth();
      },
      calculateBudgetDay(){
        this.calculateAccumulatedMonth();
        this.budgetDay = Math.floor(this.budgetMonth/30)
      },
      askExpensesList(){/* ввод расходов и их величин */

        for (let index = 0; index < this.arrCategoryAndExpenses.size; index++) {
          let msg = 'Введите обязательную статью расходов? Предлагаемые можно изменить';
          let expenses0 = prompt(msg, this.listExpenses[index]);/* категория расхода */
          msg = `Во сколько обойдется ${this.listExpenses[index]}?`
          let amount0 = start(msg, 9000); /* величина расхода */
          this.arrCategoryAndExpenses.set(expenses0, amount0);
          // let getExpensesMonth = function() {};
      }
      },

      calculateExpensesMonth() { /* считает сумму всех обязательных расходов за месяц */
      result = 0;
      this.arrCategoryAndExpenses.forEach((value, key) => {
        result += Number(value);
      });
      return result;
      },
    calculateTargetMonth() {/* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
        this.calculateAccumulatedMonth()
        let result = Math.ceil(this.mission/this.budgetMonth);
        this.targetMonth = result;
      },
      calculateAll(){
        this.calculateExpensesMonth();
        this.calculateAccumulatedMonth();
        this.calculateBudgetDay();
        this.calculateTargetMonth();
      }
  }

// ------------functions------------

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

//-------functions end---------

money = start();
appData.budget = money;
deposit = confirm("Есть ли у вас депозит в банке?");
appData.askExpensesList();
appData.calculateAccumulatedMonth();
appData.calculateAll();
//======================lesson05===================

document.querySelector('#number-lesson').textContent = 'Lesson05';
document.writeln('<h1>Lesson05</h1>');

if (appData.budgetDay > 1200) {
  output("У вас высокий уровень дохода");
} else if (appData.budgetDay <= 1200 && appData.budgetDay > 600) {
  output("У вас средний уровень дохода");
} else if (appData.budgetDay >= 0 && appData.budgetDay <= 600) {
         output("К сожалению у вас уровень дохода ниже среднего");
}




output('Количество категорий расходов:', appData.arrCategoryAndExpenses.size);
output('Наименование категорий расходов: ', Array.from(appData.arrCategoryAndExpenses.keys()));
output('Желаемая сумма накопления: ', appData.mission)
output("Бюджет на месяц: ", appData.budgetMonth);
output("Бюджет на день: ", appData.budgetDay);

if(appData.targetMonth > 0) {
  output(`Цель будет достигнута за месяцев: ${appData.targetMonth}`)
}
