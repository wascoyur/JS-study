ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ
1) Функцию showTypeof и вызов функции удаляем
2) В объект appData добавить свойство budget которое будет принимать значение money
3) В объект appData добавить свойства budgetDay, budgetMonth и expensesMonth, изначально равные нулю
4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData
5) После этого поправить весь проект, чтобы он работал, а именно
Везде где вызывались наши функции поправить обращение через объект, например
let expensesMonth = appData.getExpensesMonth();
