function test(param) {
  let count=0;
  count++;
  console.log(param + count);
}

setInterval(test, 2000);

// let myVar;

// function myFunction() {
//   myVar = setInterval(alertFunc, 3000);
// }

// function alertFunc() {
// //   alert("Hello!");
//   console.log('alert: ');
// }
// myFunction();
