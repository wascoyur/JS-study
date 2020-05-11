function calc(price = 100) {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcDay = document.querySelector('.calc-day');
  const calcCount = document.querySelector('.calc-count');
  const totalValue = document.querySelector('#total');

  const countSum = () => {
    let total = 0;
    const cTSI = calcType.selectedIndex;
    const cTO = calcType.options[cTSI];
    let countValue = 1;
    let dayValue = 1;
    const typeValue = cTO.value;
    const squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    } else {
      total = 0;
    }
    totalValue.textContent = Math.round(total);
  };
  countSum();
}
export default calc;