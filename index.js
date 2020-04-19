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







  start(){
    if (saylaryAmount.value.trim() === '') {
      console.log("Неверное значение", 'saylaryAmount');
      return;
    }
    this.budget = saylaryAmount.value;
    this.getExpenses();
    this.getAddExpenses();
    this.getAddincome();
    this.getIncome();
    this.mission = targetAmount.value;
    this.getTargetMonth();
    this.calculateAll();
    this.showResult();
  },


  ,
  ,
  ,
  ,
  ,
  ,
  ,
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
