// date in js

// const date = new Date("2022-03-03");
// console.log(date.getTime(), date.getFullYear());

// more on objects in js
// console.log(obj.fname);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// const stringObj = JSON.stringify(obj);
// const parseObj = JSON.parse(stringObj);
// console.log(parseObj.fname);

// json data
// [1,2,3,4,5]
// ["s","g"]
const arr = [
  {
    fname: "rahul",
    lanme: "jain",
    other: [
      {
        age: 10,
        gender: "male",
      },
    ],
  },
  {
    fname: "rahul",
    lanme: "jain",
    other: [
      {
        age: 10,
        gender: "male",
      },
    ],
  },
  {
    fname: "rahul",
    lanme: "jain",
    other: [
      {
        age: 10,
        gender: "male",
      },
    ],
  },
];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element.other);
//   for (let index = 0; index < element.other.length; index++) {
//     const ele = element.other[index];
//     console.log(ele.gender);
//   }
// }
// advance of js spread operators ...
// const arr1 = [1, 2, 3, 4];
// console.log(arr1);
// const arr2 = [...arr1, 5, 6, 7];
// console.log(arr2);

// const obj1 = {
//   fname: "rahul",
//   age: 1,
// };
// const obj2 = {
//   ...obj1,
//   fname: "rajesh",
//   gender: "male",
// };
// console.log(obj2);

// object destructure
// const obj = {
//   fname: "rahul",
//   lname: "sharma",
//   age: 10,
//   gender: "male",
// };

// const { gender, lname, firstname } = obj;
// console.log(gender, lname, firstname);
// const fname = obj.fname;
// console.log(fname);

// array destructuring

// const arr2 = [12, 3, 4, 5, 6, 7, 8, 8, 10, 11];
// const [a, b, c, ...z] = [...arr2];
// console.log(a, b, c, z);

// math in js
// const num = 2.54567896433;
// console.log(Math.random());
