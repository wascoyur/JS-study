ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ
1) Функцию showTypeof и вызов функции удаляем
2)+ В объект appData добавить свойство budget которое будет принимать значение money
3) В объект appData добавить свойства +budgetDay, +budgetMonth и +expensesMonth, изначально равные нулю
4) Функции getExpensesMonth, +getAccumulatedMonth, getTargetMonth, getStatusIncome - сделать методами объекта AppData
5) После этого поправить весь проект, чтобы он работал, а именно
Везде где вызывались наши функции поправить обращение через объект, например
let expensesMonth = appData.getExpensesMonth();
6) Сразу после объекта выполните вызов appData.asking();
7)+ Перенести цикл из метода getExpensesMonth в метод asking, и переписать цикл таким образом чтобы результат записывался в объект  appData.expenses
в формате:

expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”,
    “ответ на первый вопрос” : “ответ на второй вопрос”
}

временные условия которые мы писали
if (i === 0) {
    expenses1 = prompt('Введите обязательную статью расходов?', 'Кварплата');
} else {
    expenses2 = prompt('Введите обязательную статью расходов?', 'Бензин');
}
уже не нужны, вопрос задается каждый цикл


Обратите внимание Если на вопрос "Введите обязательную статью расходов?" ответить 2 раза одинаково, значения свойства просто будут перезаписаны, для проверки отвечайте всегда по разному. (очень частая ошибка)
Проследите чтобы тип данных значения свойств были числом!

Пример результата:
expenses: {
    “Квартплата” : 5000,
    “Детский сад” : 2000
}


8)+ Переписать метод getExpensesMonth: с помощью цикла считаем сумму всех обязательных расходов и сохраняем результат в свойство expensesMonth нашего объекта
для того, чтобы посчитать сумму используйте цикл for in
9) getAccumulatedMonth переименовать в getBudget. Этот метод будет высчитывать значения свойств budgetMonth и budgetDay, чтобы вычислить значения используем только свойства объекта (никаких внешних переменных)
10) В методах getTargetMonth и getStatusIncome исправить переменные, все значения получаем от нашего объекта appData
11) Вызвать все необходимые методы после объекта, чтобы корректно считались все данные (порядок очень важен).
12) В консоль вывести:
    — Расходы за месяц
    — За какой период будет достигнута цель (в месяцах)
    — Уровень дохода
Все остальное почистить в программе у нас всего две переменных money и appData
И две функции start и возможно isNumber
13) Используя цикл for in для объекта (appData), вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести все свойства и значения)
14) Проверить, чтобы все работало и не было ошибок в консоли
15) Добавить папку с уроком в свой репозиторий на GitHub
