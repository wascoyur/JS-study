let money = 2000; /* Месячный доход */

let appData = {
  budget: 0,
  income: new Map() ,              /* дополнительный доход ( вид дохода : размер доход )*/
  arrCategoryAndExpenses: new Map(/* [["одежда", 0],[ "еда",0], ["коммуналка",0]] */) /* категории расходов с суммами */,
  perid: 0,
  period: 8,
  targetMonth: 0 /* за какой период будет достигнута цель */,
  mission: 50000 /* цель накопления */,
  budgetDay: 0,
  budgetMonth: 0 /* бюджет на месяц (свободные деньги) */,
  expensesMonth: 0 /* суммарые расходы на месяц */,
  depositProcent: 0,/* ставка депозита */
  deposiSize : 0, /* размер депозита */
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
  asker(asKey, ad){
    let msg, hnt, answType, answer, result;
    do {
      msg = inputMsg(asKey, ad)[0];
      hnt = inputMsg(asKey)[1];
      answType = inputMsg(asKey)[2];
      answer = prompt(msg, hnt);
      if(start2Validation(answer, answType)){
        result = answer.trim();
        switch(answType){
          case 'string':
          break
          case 'number':
            result = Number(result);
          break
          case 'array':
            result = result.split(',');
          break
        }
        return result;
      }
    } while (true)
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

function inputMsg(key, adds){
    //[0:Msg, 1:[hint], 2:target type]
  let identifikators = new Map([
    ['mIncom' , ['Укажите размер основного дохода', 33000, 'number']],
    ['addIncom', ['Укажите виды дополнительного дохода через запятую', ['пособия', 'субвенции'],'array']],
    ['addIncomSize', [`Укажите размеры дополнительного дохода: "${adds}"`, 11500, 'number']],
    ['expenses', ['Укажите виды расходов через запятую', ['коммуналка', 'еда','одежда'],'array']],
    ['amountExpenses', [`Во сколько обойдется "${adds}"? `, [7000, 8000, 10000],'number']],
    ['errorMsg', ['Неверные данные, попробуйте еще раз', [0,0,0],'']],
    ['addSizeDeposit', ['Введите размер депозита, если пусто, значит отсутсвует', [1000],'number']],
    ['addProcentDeposit', ['Введите ставку депозита', [7],'number']],
  ])
  return identifikators.get(key);
}
function start2Validation(data, type){/* только проверка введеных данных */
  let processData = data.trim();
  let check = false;
  switch(type){
    case 'string':
        (processData === data) && (processData!= '')? (check = true): null;
      break;
    case 'number':
        check = (!isNaN(processData)) && (!isNaN(parseFloat(data)));
      break;
    case 'array':
      let arr = processData.split(',');
      let clearArr = arr.map((el)=>{
        return el.trim();
      });
      let tmpCheck = (clearArr.reduce((result, current, index)=>{
        result = true;
        return result = start2Validation(current, 'string') && result ;
          }
        )
      )
      check = tmpCheck && clearArr instanceof Array;
      break;
  }

  return check;
}

appData.budget = appData.asker('mIncom');
let addIncom = appData.asker('addIncom'); /* ввод категорий дополнильных доходов */

addIncom.forEach((el, index)=>{           /* ввод размеров дополнительных доходов */
  appData.income.set(el, appData.asker("addIncomSize", addIncom[index]));
})

appData.deposiSize = appData.asker("addSizeDeposit"); /* ввод данных депозита */
if (appData.deposiSize > 0) {
  appData.depositProcent = appData.asker("addProcentDeposit");
}

let expenses = appData.asker('expenses');
expenses.forEach((elm, index) =>{
  appData.arrCategoryAndExpenses.set(elm, appData.asker('amountExpenses', expenses[index]));
})
appData.getBudget();
appData.calculateAll();


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
  Array.from(appData.arrCategoryAndExpenses.keys()).join(", ")
);
output("Желаемая сумма накопления: ", appData.mission);
output("Бюджет на месяц: ", appData.budgetMonth);
output("Бюджет на день: ", appData.budgetDay);

if (appData.targetMonth > 0) {
  output(`Цель будет достигнута за месяцев: ${appData.targetMonth}`);
}
