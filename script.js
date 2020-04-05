let money = 2000;/* Месячный доход */

  let appData = {
      budget: 0,
      arrCategoryAndExpenses :new Map(),/* категории расходов с суммами */
      perid:0,
      targetMonth:0,                                        /* за какой период будет достигнута цель */
      mission:50000,                                  /* цель накопления */
      listExpenses: ["одежда", "еда", "коммуналка"], /* список категориии расходов дублирующий */
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
        do {
          let msg = 'Введите обязательную статью расходов? Предлагаемые можно изменить';
          let expenses0;
          do {
            expenses0 = prompt(msg, this.listExpenses.pop());/* категория расхода */
          } while (!checkDublicateExpenses(expenses0, 'string'));
          msg = `Во сколько обойдется ${expenses0}?`
          let amount0 = start(msg, 9000); /* величина расхода */
          this.arrCategoryAndExpenses.set(expenses0, amount0);

          function checkDublicateExpenses(input, dataType){
            input = vadidationDataInput(input, dataType);
            if (input === '') {
              console.log(`Выход из цикла`);
              return true;
            }
            if (!appData.arrCategoryAndExpenses.has(expenses0)) {
                return true;
            }
            return false;
          }
        }while(true)
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

function output(comment ='', value = ''){             /* вывод*/
  document.writeln(`${comment} ${value} <br \/>`);
  console.log(`${comment} ${value}`);
};
function vadidationDataInput (data, targetDataType){
  result = data.trim();
  if (typeof(data) === targetDataType){
    return result;
  }
  return false;
}
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
// appData.addFirstListExpenses();
deposit = confirm("Есть ли у вас депозит в банке?");
appData.askExpensesList();
appData.calculateAccumulatedMonth();
appData.calculateAll();
//======================lesson05===================

document.querySelector('#number-lesson').textContent = 'Lesson07';
document.writeln('<h1>Lesson07</h1>');

if (appData.budgetDay > 1200) {
  output("У вас высокий уровень дохода");
} else if (appData.budgetDay <= 1200 && appData.budgetDay > 600) {
  output("У вас средний уровень дохода");
} else if (appData.budgetDay >= 0 && appData.budgetDay <= 600) {
         output("К сожалению у вас уровень дохода ниже среднего");
}else{
  output('Либо ошибка предоставленных данных, либо надо что-то срочно предпринять')
}




output('Количество категорий расходов:', appData.arrCategoryAndExpenses.size);
output('Наименование категорий расходов: ', Array.from(appData.arrCategoryAndExpenses.keys()));
output('Желаемая сумма накопления: ', appData.mission)
output("Бюджет на месяц: ", appData.budgetMonth);
output("Бюджет на день: ", appData.budgetDay);

if(appData.targetMonth > 0) {
  output(`Цель будет достигнута за месяцев: ${appData.targetMonth}`)
}else{
  output(`С таким уовнем дохода ${appData.budget} цель не будет достигнута`)
}
