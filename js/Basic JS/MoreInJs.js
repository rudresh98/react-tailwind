// advance concept of js
// arrays
// 1. forEach
// 2. for loop
// 3 for in
// why ???

const arr = [1, 2, 3, 4, 5, 6];
// for each
console.time("foreach");
arr.forEach((ele) => console.log({ ele }));
console.timeEnd("foreach");

// for loop
console.time("forloop");
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log({ element });
}
console.timeEnd("forloop");

// for in
console.time("forin");
for (const ele of arr) {
  console.log({ ele });
}
console.timeEnd("forin");
