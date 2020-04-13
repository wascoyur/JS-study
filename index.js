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
let incomePeriodValue = document.querySelector(".income_period-value");
let targetMonthValue = document.querySelector(".target_month-value");
let periodSelect = document.querySelector(".period-select");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");
let targetAmount = document.querySelector('.target-amount');
let incomItems = document.querySelectorAll('.income-items')

let appData = {
  budget: 0,/* Месячный доход */
  addIncome: ['такси', 'фриланс'] ,              /* дополнительный доход ( вид дохода : размер доход )*/
  arrExpenses: new Map([["одежда", 2345],[ "еда",5432], ["коммуналка",3765]]) /* категории расходов с суммами */,
  addExpenses: ['штрафы', 'пени'],
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
  incomeMonth: 0,

  getBudget() {
    /* вычисление Накопления за месяц (Доходы минус расходы) */
    this.budgetMonth = this.budget + this.incomeMonth - this.calculateExpensesMonth();
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
  getTargetMonth() {
    /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
    this.getBudget();
    let result = Math.ceil(appData.mission/appData.budgetMonth);
    this.targetMonth = result;
  },
  getStatusIncome() {
    if (appData.budgetDay > 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (appData.budgetDay <= 1200 && appData.budgetDay > 600) {
      console.log("У вас средний уровень дохода");
    } else if (appData.budgetDay >= 0 && appData.budgetDay <= 600) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    }
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
  start(){
    if (saylaryAmount.value.trim() === '') {
      console.log("Неверное значение", 'saylaryAmount');
      return;
    }
    appData.budget = saylaryAmount.value;
    appData.getExpenses();
    appData.getAddExpenses();
    appData.getAddincome();
    appData.getTargetMonth();
    appData.calculateAll();
    appData.mission = targetAmount.value;
    appData.calculateAll();
    appData.getIncome();

    appData.showResult();
  },
  addExpensesBlock(){
    let expensesItem = document.querySelector('.expenses-items');
    let cloneExpensesItem = expensesItem.cloneNode(true);
    expensesItem.parentNode.insertBefore(cloneExpensesItem, buttonExpensAdd);
    let count = document.querySelectorAll(".expenses-items").length;
        if(count > 2){
          buttonExpensAdd.style.display = 'none';
          return;
        }
  },
  getExpenses(){
    let formsArr = document.querySelectorAll('.expenses-items');
    formsArr.forEach((el, ind) =>{
        let itemExpenses = el.querySelector('.expenses-title').value
        let amountExpenses = el.querySelector('.expenses-amount').value
        if (itemExpenses !='' && amountExpenses !=''){
          this.arrExpenses.set(itemExpenses, amountExpenses);
        }
    })
  },
  addIncomeBlock(){
     let incomeItems = document.querySelector(".income-items");
     let cloneincomeItem = incomeItems.cloneNode(true);
     incomeItems.parentNode.insertBefore(cloneincomeItem, buttonIncomPlus);
     let count = document.querySelectorAll(".income-items").length;
     if (count > 2) {
       buttonIncomPlus.style.display = "none";
       return;
     }
  },
  getIncome(){
    //TODO собрать данные из форм income-items
    //TODO appData.incomeMonth += appData.income[key]
  },
  showResult(){
    budgetMonthValue.value = appData.budget;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.targetMonth;
    incomePeriodValue.value = appData.calcPeriod();
  },
  getAddExpenses(){/* дополнительные расходы */
    let formExpenses = additionalExpensesItem.value.split(",");
    formExpenses.forEach((item) =>{
      if(item.trim() != ''){
        appData.addExpenses.push(item);
      }
    })
  },
  getAddincome(){
    additionalIncomeItem.forEach((el) =>{
      let itemValue = el.value.trim();
      if (itemValue != '') {
        appData.addIncome.push(itemValue);
      }
    })

  },
  calcPeriod(){
    return appData.budgetMonth * periodSelect.value;
  },
  calculateAll() {
    appData.calculateExpensesMonth();
    appData.getBudget();
    appData.calculateBudgetDay();

    appData.getStatusIncome();
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
buttonIncomPlus.addEventListener('click', appData.addIncomeBlock);
