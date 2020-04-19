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
AppData.prototype.start = function(){
  if (saylaryAmount.value.trim() === "") {
    console.log("Неверное значение", "saylaryAmount");
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

  let allInput = document.querySelectorAll('.data input[type = text]');
  allInput.forEach((item) =>{
    item.setAttribute('disabled','disabled');
  })
  buttonExpensAdd.setAttribute('disabled', 'true');//TODO сделать отключение полей по старт
  buttonIncomPlus.setAttribute("disabled", "true");
  buttonStart.getElementsByClassName.display = 'none';
  // buttonCencel.getElementsByClassName.display = 'none';
};
AppData.prototype.getBudget = function(){
  /* вычисление Накопления за месяц (Доходы минус расходы) */
    this.budgetMonth = +this.incomeMonth + +this.budget - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
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
AppData.prototype.addExpensesBlock = () =>{
    let expensesItem = document.querySelector('.expenses-items');
    let cloneExpensesItem = expensesItem.cloneNode(true);
    expensesItem.parentNode.insertBefore(cloneExpensesItem, buttonExpensAdd);
    let count = document.querySelectorAll(".expenses-items").length;
        if(count > 2){
          buttonExpensAdd.style.display = 'none';
          return;
        }
  };
AppData.prototype.getExpenses = () =>{
    let formsArr = document.querySelectorAll('.expenses-items');
    formsArr.forEach((el, ind) =>{
        let itemExpenses = el.querySelector('.expenses-title').value
        let amountExpenses = el.querySelector('.expenses-amount').value
        if (itemExpenses !='' && amountExpenses !=''){
          this.arrExpenses.set(itemExpenses, amountExpenses);
        }
    })
  };
AppData.prototype.addIncomeBlock = () =>{
     let incomeItems = document.querySelector(".income-items");
     let cloneincomeItem = incomeItems.cloneNode(true);
     incomeItems.parentNode.insertBefore(cloneincomeItem, buttonIncomPlus);
     let count = document.querySelectorAll(".income-items").length;
     if (count > 2) {
       buttonIncomPlus.style.display = "none";
       return;
     }
  };
AppData.prototype.getIncome = () =>{
    let formsArr = document.querySelectorAll('.income-items');
    formsArr.forEach((el)=>{
      let itemIncome = el.querySelector(".income-title").value.trim();
      let amountIncome = el.querySelector(".income-amount").value.trim();
      if(itemIncome !='' && amountIncome !=''){
        this.addIncome.push(itemIncome);
        this.incomeMonth += +amountIncome;
      }
    })

  };
AppData.prototype.showResult = () =>{
    budgetMonthValue.value = this.budget;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.targetMonth);
    incomePeriodValue.value = this.calcPeriod();
  };
AppData.prototype.getAddExpenses =() =>{/* дополнительные расходы */
    let formExpenses = additionalExpensesItem.value.split(",");
    formExpenses.forEach((item) =>{
      if(item.trim() != ''){
        this.addExpenses.push(item);
      }
    })
  };
AppData.prototype.getAddincome = ()=>{
    additionalIncomeItem.forEach((el) =>{
      let itemValue = el.value.trim();
      if (itemValue != '') {
        this.addIncome.push(itemValue);
      }
    })
  };
AppData.prototype.calcPeriod = ()=>{
    return this.budgetMonth * periodSelect.value;
  }
AppData.prototype.calculateAll=()=> {
    this.calculateExpensesMonth();
    this.getBudget();
    this.calculateBudgetDay();

    this.getStatusIncome();
  };

function init(){
  this.arrExpenses.forEach((el, ind)=>{
    saylaryAmount
  })
}
// ------------functions------------
let appData = new AppData();
console.dir(appData);

buttonStart.addEventListener('click', appData.start.bind(appData));
// buttonExpensAdd.addEventListener('click', appData.addExpensesBlock);
// buttonIncomPlus.addEventListener('click', appData.addIncomeBlock);
// periodSelect.addEventListener('input' ,() =>{
//    periodAmount.textContent = periodSelect.value;
//    appData.start.bind(appData);
// });
