let buttonStart = document.querySelector("#start");
let buttonCancel = document.querySelector("#cancel");
let saylaryAmount = document.querySelector('.salary-amount');
// let btnPlusExpensesAdd = document.querySelector(".btn_plus expenses_add");
let buttonIncomPlus = document.querySelectorAll("button")[0];
let buttonExpensAdd = document.querySelectorAll("button")[1];
let depositCheck = document.querySelector("#deposit-check");

let depositAmount = document.querySelector(".deposit-amount");
let depositBank = document.querySelector('.deposit-bank');
let depositCalc = document.querySelector('.deposit-calc');
let depositPercent = document.querySelector(".deposit-percent");


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

class AppData {
  constructor() {
    this.budget = 0; /* Месячный доход */
    this.addIncome = []; /* дополнительный доход ( вид дохода  = размер доход )*/
    this.arrExpenses = new Map() /* категории расходов с суммами */;
    this.addExpenses = [];
    this.targetMonth = 0 /* за какой период будет достигнута цель */;
    this.budgetDay = 0;
    this.budgetMonth = 0 /* бюджет на месяц (свободные деньги) */;
    this.expensesMonth = 0 /* суммарые расходы на месяц */;
    this.depositProcent = 0; /* ставка депозита */
    this.deposiSize = 0; /* размер депозита */
    this.incomeMonth = 0; /* дополнительный доход */
  }

  start() {
    if (saylaryAmount.value.trim() === "") {
      console.log("Неверное значение", "saylaryAmount");
      return;
    }

    this.budget = saylaryAmount.value;
    this.getIncome();
    this.getAddincome();
    this.getExpenses();
    this.getAddExpenses();
    this.getBudget();
    this.mission = targetAmount.value;
    this.getTargetMonth();
    this.showResult();
    let allInput = document.querySelectorAll(".data input[type = text]");
    allInput.forEach((item) => {
      item.setAttribute("disabled", "disabled");
    });
    buttonExpensAdd.removeAttribute("disabled");
    buttonIncomPlus.removeAttribute("disabled");
    buttonStart.style.display = "none";
    buttonCancel.style.display = "block";
  }
  getBudget() {
    /* вычисление Накопления за месяц (Доходы минус расходы) */
    this.budgetMonth = +this.incomeMonth + +this.budget - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }
  calculateExpensesMonth() {
    /* считает сумму всех обязательных расходов за месяц */
    let result = 0;
    this.arrExpenses.forEach((value, key) => {
      result += Number(value);
    });
    this.expensesMonth = result;
  }
  getTargetMonth() {
    /* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат  */
    // this.getBudget();
    let result = Math.ceil(targetAmount.value / this.budgetMonth);
    this.targetMonth = result;
    console.log(this);
  }
  getStatusIncome() {
    if (this.budgetDay > 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (this.budgetDay <= 1200 && this.budgetDay > 600) {
      console.log("У вас средний уровень дохода");
    } else if (this.budgetDay >= 0 && this.budgetDay <= 600) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    }
  }
  addExpensesBlock() {
    let expensesItem = document.querySelector(".expenses-items");
    let cloneExpensesItem = expensesItem.cloneNode(true);
    expensesItem.parentNode.insertBefore(cloneExpensesItem, buttonExpensAdd);
    let count = document.querySelectorAll(".expenses-items").length;
    if (count > 2) {
      buttonExpensAdd.style.display = "none";
      return;
    }
  }
  getExpenses() {
    let formsArr = document.querySelectorAll(".expenses-items");
    formsArr.forEach((el, ind) => {
      let itemExpenses = el.querySelector(".expenses-title").value;
      let amountExpenses = el.querySelector(".expenses-amount").value;
      if (itemExpenses != "" && amountExpenses != "") {
        appData.arrExpenses.set(itemExpenses, amountExpenses);
      }
    });
  }
  addIncomeBlock() {
    let incomeItems = document.querySelector(".income-items");
    let cloneincomeItem = incomeItems.cloneNode(true);
    incomeItems.parentNode.insertBefore(cloneincomeItem, buttonIncomPlus);
    let count = document.querySelectorAll(".income-items").length;
    if (count > 2) {
      buttonIncomPlus.style.display = "none";
      return;
    }
  }
  getIncome() {
    let formsArr = document.querySelectorAll(".income-items");
    formsArr.forEach((el) => {
      let itemIncome = el.querySelector(".income-title").value.trim();
      let amountIncome = el.querySelector(".income-amount").value.trim();
      if (itemIncome != "" && amountIncome != "") {
        this.addIncome.push(itemIncome);
        this.incomeMonth += +amountIncome;
      }
    });
  }
  showResult() {
    const _this = this;
    budgetMonthValue.value = this.budget;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(this.targetMonth);
    incomePeriodValue.value = this.calcPeriod();
  }
  getAddExpenses() {
    /* дополнительные расходы */
    let formExpenses = additionalExpensesItem.value.split(",");
    formExpenses.forEach((item) => {
      if (item.trim() != "") {
        this.addExpenses.push(item);
      }
    });
  }
  getAddincome() {
    additionalIncomeItem.forEach((el) => {
      let itemValue = el.value.trim();
      if (itemValue != "") {
        this.addIncome.push(itemValue);
      }
    });
  }
  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }
  reset() {
    this.budget = 0;
    this.addIncome = [];
    this.arrExpenses = new Map();
    this.addExpenses = [];
    this.targetMonth = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.depositProcent = 0;
    this.deposiSize = 0;
    this.incomeMonth = 0;
    let allInput = document.querySelectorAll(".data input[type = text]");
    allInput.forEach(function(item){
      item.removeAttribute("disabled");
      item.setAttribute("value", '');
    });
     buttonStart.style.display = "block";
     buttonCancel.style.display = "none";
    this.showResult();
  };
  depositHandler(){
    if (depositCheck.checked) {
      console.log(depositCheck.value);
      depositAmount.style.display = 'inline-block';
      depositBank.style.display = "inline-block";
      depositCalc.style.display = "inline-block";
    }else{
      depositAmount.style.display = "none";
      depositBank.style.display = "none";
      depositCalc.style.display = "none";
      depositAmount.value = '';
      depositBank.value = '';
    }

  };
  eventsListeners() {
    buttonStart.addEventListener("click", appData.start.bind(appData));
    buttonCancel.addEventListener("click", appData.reset.bind(this));
    buttonExpensAdd.addEventListener("click", appData.addExpensesBlock);
    buttonIncomPlus.addEventListener("click", appData.addIncomeBlock);
    periodSelect.addEventListener("input", () => {
      periodAmount.textContent = periodSelect.value;
      this.start.bind(appData);
    });
    depositCheck.addEventListener("change", this.depositHandler.bind(this));
  }
};


// ------------functions------------
let appData = new AppData();
appData.eventsListeners();
console.dir(appData);
