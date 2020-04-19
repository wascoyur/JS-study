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

const AppData = function(){
  this.budget = 0;/* Месячный доход */
  this.addIncome = [];              /* дополнительный доход ( вид дохода  = размер доход )*/
  this.arrExpenses = new Map() /* категории расходов с суммами */;
  this.addExpenses = [];
  this.targetMonth = 0 /* за какой период будет достигнута цель */;
  this.budgetDay = 0;
  this.budgetMonth = 0 /* бюджет на месяц (свободные деньги) */;
  this.expensesMonth = 0 /* суммарые расходы на месяц */;
  this.depositProcent = 0;/* ставка депозита */
  this.deposiSize  = 0; /* размер депозита */
  this.persentOfDeposut = 7;
  this.incomeMonth = 0; /* дополнительный доход */
};

AppData.prototype.getBudget = function(){
  /* вычисление Накопления за месяц (Доходы минус расходы) */
    this.budgetMonth = +this.incomeMonth + +this.budget - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.start = function(){
  if (saylaryAmount.value.trim() === "") {
    console.log("Неверное значение", "saylaryAmount");
    return;
  }
  let allInput = document.querySelectorAll('.data input[type = text]');
  allInput.forEach((item) =>{
    item.setAttribute('disabled','disabled');
  })
  buttonExpensAdd.setAttribute('disabled', 'true');//TODO сделать отключение полей по старт
  buttonIncomPlus.setAttribute("disabled", "true");
  buttonStart.getElementsByClassName.display = 'none';
  // buttonCencel.getElementsByClassName.display = 'none';

  this.budget = saylaryAmount.value;
  this.getExpenses();
  this.getAddExpenses();
  this.getAddincome();
  this.getIncome();
  this.mission = targetAmount.value;
  this.getTargetMonth();
  this.calculateAll();
  this.showResult();
};
AppData.prototype.calculateExpensesMonth = () => {
    /* считает сумму всех обязательных расходов за месяц */
    result = 0;
    this.arrExpenses.forEach((value, key) => {
      result += Number(value);
    });
    this.expensesMonth = result;
  };
AppData.prototype.getTargetMonth = ()=> {
    /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
    this.getBudget();
    let result = Math.ceil(targetAmount.value/this.budgetMonth);
    this.targetMonth = result;
  };
AppData.prototype.getStatusIncome = ()=> {
    if (this.budgetDay > 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (this.budgetDay <= 1200 && this.budgetDay > 600) {
      console.log("У вас средний уровень дохода");
    } else if (this.budgetDay >= 0 && this.budgetDay <= 600) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    }
  };



function init(){
  this.arrExpenses.forEach((el, ind)=>{
    saylaryAmount
  })
}
// ------------functions------------
let appData = new AppData();
console.dir(appData);

// buttonStart.addEventListener('click', appData.start.bind(appData));
// buttonExpensAdd.addEventListener('click', appData.addExpensesBlock);
// buttonIncomPlus.addEventListener('click', appData.addIncomeBlock);
// periodSelect.addEventListener('input' ,() =>{
//    periodAmount.textContent = periodSelect.value;
//    appData.start.bind(appData);
// });
