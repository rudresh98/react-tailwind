// array in js
// variable who store multiple type of data and more than a value
// const arr = [1, 2, 3, 4, "rahul", false, 1.9999999999];
const arr1 = [10, 20, 30, 40];
// const arr1 = new Array(10, 20, 30);
// [0,1 ,2,3]
// console.log("OUTPUT", arr1[2]);

// 1. length

// console.log(arr1.length);

//2. toString()
// console.log(arr1.toString());

// 3. join()

// console.log(arr1.join(""));

//4. pop()
// console.log("before pop", { arr1 });
// const popedValue = arr1.pop();
// console.log({ popedValue });
// console.log("after pop", { arr1 });
// arr1.pop();
// console.log("after second pop", { arr1 });

// 5. push()
// console.log("arr before push", arr1);
// arr1.push(100);
// console.log("arr after push", arr1);

//6. shift()
// console.log("before shift", arr1);
// const shiftedValue = arr1.shift();
// console.log({ shiftedValue });
// console.log("after shift", { arr1 });

// 7. unshift()
// console.log("before unshift", arr1);
// arr1.unshift(200);
// console.log("after unshift", arr1);

// 8. concat()
// const arr = [3, 4, 5];
// const arr2 = ["rahul", "rajesh"];
// console.log(arr1.concat(arr, arr2));

// 9. splice() **
// console.log("before splice", arr1);
// arr1.splice(2, 0, "rahul", "rajesh", "sita");
// splice(
//   "index",
//   "how many values you want to remove",
//   "values you want to add",
//   "v1",
//   "v2,v3"
// );
// console.log("after splice", arr1);

// 10. slice() **
// console.log("before slice", arr1);
// const slicedValue = arr1.slice(1);
// console.log({ slicedValue });
// console.log("after slice", arr1);

// 11. sort() **
// const arr3 = [5, 6, 71, 56, 4, 7, 100, 200];
// const sortedArr = arr3.sort((a, b) => b - a);
// const sortedArr = arr3.sort();
// console.log({ sortedArr });
// 12. reverse()

// console.log(arr1.reverse());

// interation in array
// 13. foreach()
// arr1.forEach((element, index, array) => {
//   console.log({ element }, { index }, { array });
// });

// 14. for loop
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i], arr1, i);
// }

//15. map() **
// example multiple 2 return new array
// const resultArr = [];
// console.log({ arr1 });
// for (let index = 0; index < arr1.length; index++) {
//   const element = arr1[index];
//   resultArr.push(element * 2);
// }
// console.log({ resultArr });

// const mappedArr = arr1.map((ele, i, arr) => ele * 2);
// const doubleEle = (ele, i, arr) => {
//   const result = "result-> " + ele * 2 + " index-> " + i;
//   return result;
// };
// const mappedArr = arr1.map(doubleEle);

// console.log({ mappedArr });

//16. filter() **
// console.log({ arr1 });
// const filteredHandler = (ele, i, arr) => ele >= 30;
// const filteredData = arr1.filter(filteredHandler);
// console.log({ filteredData });
console.time("0");
[1, 2, 3, 4].forEach((ele) => console.log({ ele }));
console.timeEnd("0");

const arr = [1, 2, 3];
console.time("1");
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}
console.timeEnd("1");
console.time("2");
for (const iterator of arr) {
  console.log({ iterator });
}
console.timeEnd("2");
