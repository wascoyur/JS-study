let arr = [];
for (let index = 0; index < 40; index++) {
  arr.push('' + parseInt(Math.random()*10000));
}
const res = arr.filter(el => el[0] ==='2');
console.log(res);

nextPrime:
  for (let index = 2; index < 100; index++) {
    for (let j = 2; j < index; j++) {
      if (index % j ==0) {
        continue nextPrime;
      }
    }
  console.log(`${index} делители этого числа 1 и ${index}`);
  }
