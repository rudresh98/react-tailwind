// block scope designed to perform some task

// hoisting
// addNum(2, 3);
// function addNum(a, b) {
//   console.log(a + b);
// }
// const subNum = (a, b) => {
//   console.log(a - b);
// };
// subNum(5, 4);

// const multipleNum = (a, b) => {
//   return a + b;
// };
// const value = multipleNum(3, 4);
// console.log(value);

// degree
const toCelsius = (farDegree) => {
  const resultValue =
    farDegree + " in celsius is " + (5 / 9) * (farDegree - 32);
  return resultValue;
};
const celsiusValue = toCelsius(100);
console.log(celsiusValue);

console.log(toCelsius(200));
console.log(toCelsius(400));
console.log(toCelsius(500));
