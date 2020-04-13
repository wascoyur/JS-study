let money = 2000;
let buttonStart = document.querySelector("#start");
let saylaryAmount = document.querySelector('.salary-amount');
// let btnPlusExpensesAdd = document.querySelector(".btn_plus expenses_add");
let buttonIncomPlus = document.querySelectorAll("button")[0];
let buttonExpensAdd = document.querySelectorAll("button")[1];
let depositCheck = document.querySelector("#deposit-check");
let additionalIncomeItem = document.querySelectorAll(".additional_income-item");
let budgetMonthValue = document.querySelector(".budget_month-value");
let budgetDayValue = document.querySelector(".budget_day-value");
let expensesMonthValue = document.querySelector(".expenses_month-value");
let additionalIncomeValue = document.querySelector(".additional_income-value");
let additionalExpensesValue = document.querySelector(".additional_expenses-value");
let resultTotalIncomePeriodValue = document.querySelector(".income_period-value");
let resultTotalTargetMonthValue = document.querySelector(".target_month-value");
let periodSelect = document.querySelector(".period-select");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");

let appData = {
  budget: 0 /* Месячный доход */,
  addIncome: [] /* дополнительный доход ( вид дохода : размер доход )*/,
  arrExpenses: new Map([
    ["одежда", 2345],
    ["еда", 5432],
    ["коммуналка", 3765],
  ]) /* категории расходов с суммами */,
  addExpenses: [],
  perid: 0,
  period: 8,
  targetMonth: 0 /* за какой период будет достигнута цель */,
  mission: 50000 /* цель накопления */,
  budgetDay: 0,
  budgetMonth: 0 /* бюджет на месяц (свободные деньги) */,
  expensesMonth: 0 /* суммарые расходы на месяц */,
  depositProcent: 0 /* ставка депозита */,
  deposiSize: 0 /* размер депозита */,
  persentOfDeposut: 7,

  getBudget() {
    /* вычисление Накопления за месяц (Доходы минус расходы) */
    this.budgetMonth = this.budget - this.calculateExpensesMonth();
  },
  calculateBudgetDay() {
    this.getBudget();
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  },

  calculateExpensesMonth() {
    /* считает сумму всех обязательных расходов за месяц */
    result = 0;
    appData.arrExpenses.forEach((value, key) => {
      result += Number(value);
    });
    appData.expensesMonth = result;
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

  asker(asKey, ad) {
    let msg, hnt, answType, answer, result;
    do {
      msg = inputMsg(asKey, ad)[0];
      hnt = inputMsg(asKey)[1];
      answType = inputMsg(asKey)[2];
      answer = prompt(msg, hnt);
      if (start2Validation(answer, answType)) {
        result = answer.trim();
        switch (answType) {
          case "string":
            break;
          case "number":
            result = Number(result);
            break;
          case "array":
            result = result.split(",");
            break;
        }
        return result;
      }
    } while (true);
  },
  start() {
    if (saylaryAmount.value.trim() === "") {
      console.log("Неверное значение", "saylaryAmount");
      return;
    }
    appData.budget = saylaryAmount.value;
    appData.getExpenses();
    appData.getAddExpenses();
    appData.getAddIncome();
    
    appData.calculateExpensesMonth();
    appData.getBudget();
    appData.calculateBudgetDay();
    appData.calculateTargetMonth();
    appData.getStatusIncome();
  },
  addExpensesBlock() {
    let expensesItem = document.querySelector(".expenses-items");
    let cloneExpensesItem = expensesItem.cloneNode(true);
    expensesItem.parentNode.insertBefore(cloneExpensesItem, buttonExpensAdd);
    let count = document.querySelectorAll(".expenses-items").length;
    if (count > 2) {
      buttonExpensAdd.style.display = "none";
      return;
    }
  },
  getExpenses() {
    let formsArr = document.querySelectorAll(".expenses-items");
    formsArr.forEach((el, ind) => {
      let itemExpenses = el.querySelector(".expenses-title").value;
      let amountExpenses = el.querySelector(".expenses-amount").value;
      if (itemExpenses != "" && amountExpenses != "") {
        this.arrExpenses.set(itemExpenses, amountExpenses);
      }
    });
    appData.showResult();
  },
  showResult() {
    appData.calculateAll();
    budgetMonthValue.value = appData.budget;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
  },
  getAddExpenses() {
    /* дополнительные расходы */
    let formEpenses = additionalExpensesItem.value.split(",");
    formEpenses.forEach((item) => {
      item = item.trim();
      if (item != '') {
        appData.addExpenses.push(item);
      }
    });
  },

  calculateAddExpenses() {
    /* считает сумму всех обязательных расходов за месяц */
    result = 0;
    appData.addExpenses.forEach((value, key) => {
      result += Number(value);
    });
    appData.addExpenses = result;
    return result;
  },
  getAddIncome(){
    additionalIncomeItem.forEach((el) =>{
      let itemValue = item.value.trim();
        if(itemValue !== ''){
          appData.addIncome.push(itemValue);
        }
    })
  },

  calculateAll() {

  },
};
function init(){
  appData.arrExpenses.forEach((el, ind)=>{
    saylaryAmount
  })
}
// ------------functions------------

buttonStart.addEventListener('click', appData.start);
buttonExpensAdd.addEventListener('click', appData.addExpensesBlock);
appData.showResult();

// appData.calculateAll();
