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

let targetMonthValue = document.querySelector(".target_month-value");
let periodSelect = document.querySelector(".period-select");
let additionalExpensesItem = document.querySelector(".additional_expenses-item");
let targetAmount = document.querySelector('.target-amount');
let incomItems = document.querySelectorAll('.income-items');

let periodAmount = document.querySelector('.period-amount');
let incomePeriodValue = document.querySelector(".income_period-value");

let appData = {
  budget: 0,/* Месячный доход */
  addIncome: [],              /* дополнительный доход ( вид дохода : размер доход )*/
  arrExpenses: new Map() /* категории расходов с суммами */,
  addExpenses: [],
  targetMonth: 0 /* за какой период будет достигнута цель */,
  budgetDay: 0,
  budgetMonth: 0 /* бюджет на месяц (свободные деньги) */,
  expensesMonth: 0 /* суммарые расходы на месяц */,
  depositProcent: 0,/* ставка депозита */
  deposiSize : 0, /* размер депозита */
  persentOfDeposut: 7,
  incomeMonth: 0, /* дополнительный доход */

  getBudget() {
    /* вычисление Накопления за месяц (Доходы минус расходы) */
    this.budgetMonth = this.incomeMonth + this.budget - this.expensesMonth;
  },
  calculateBudgetDay() {

    this.budgetDay = Math.floor(this.budgetMonth/ 30);
  },

  calculateExpensesMonth() {
    /* считает сумму всех обязательных расходов за месяц */
    result = 0;
    this.arrExpenses.forEach((value, key) => {
      result += Number(value);
    });
    this.expensesMonth = result;
  },
  getTargetMonth() {
    /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
    this.getBudget();
    let result = Math.ceil(targetAmount.value/this.budgetMonth);
    this.targetMonth = result;
  },
  getStatusIncome() {
    if (this.budgetDay > 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (this.budgetDay <= 1200 && this.budgetDay > 600) {
      console.log("У вас средний уровень дохода");
    } else if (this.budgetDay >= 0 && this.budgetDay <= 600) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    }
  },

  start(){
    if (saylaryAmount.value.trim() === '') {
      console.log("Неверное значение", 'saylaryAmount');
      return;
    }
    this.budget = saylaryAmount.value;
    this.getExpenses;
    this.getAddExpenses();
    this.getAddincome();
    this.getTargetMonth();
    this.calculateAll();
    this.mission = targetAmount.value;

    this.getIncome();
    this.calculateAll();
    this.showResult();
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
    let formsArr = document.querySelectorAll('.income-items');
    formsArr.forEach((el)=>{
      let itemIncome = el.querySelector(".income-title").value.trim();
      let amountIncome = el.querySelector(".income-amount").value.trim();
      if(itemIncome !='' && amountIncome !=''){
        this.addIncome.push(amountIncome);
        this.incomeMonth += +amountIncome;
      }
    })
    //TODO this.incomeMonth += this.income[key]

  },
  showResult(){
    budgetMonthValue.value = this.budget;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.targetMonth);
    incomePeriodValue.value = this.calcPeriod();
  },
  getAddExpenses(){/* дополнительные расходы */
    let formExpenses = additionalExpensesItem.value.split(",");
    formExpenses.forEach((item) =>{
      if(item.trim() != ''){
        this.addExpenses.push(item);
      }
    })
  },
  getAddincome(){
    additionalIncomeItem.forEach((el) =>{
      let itemValue = el.value.trim();
      if (itemValue != '') {
        this.addIncome.push(itemValue);
      }
    })

  },
  calcPeriod(){

    return this.budgetMonth * periodSelect.value;
  },
  calculateAll() {
    this.calculateExpensesMonth();
    this.getBudget();
    this.calculateBudgetDay();

    this.getStatusIncome();
  },
};
function init(){
  this.arrExpenses.forEach((el, ind)=>{
    saylaryAmount
  })
}
// ------------functions------------

buttonStart.addEventListener('click', appData.start.bind(appData));
buttonExpensAdd.addEventListener('click', appData.addExpensesBlock);
buttonIncomPlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input' ,() =>{
   periodAmount.textContent = periodSelect.value;
   appData.start.bind(appData);
});
