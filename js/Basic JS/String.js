console.log("String.js runs here");

// manipulating text

const str = "rahul sharma";
// index of above string 0 1 2 3 4 5 6 7 8 9 10 11
const str1 = " Rajesh sHarma";
const str2 = " Hi there, my name is rajesh.rajesh is 10 years old";
console.log(str);

// in build methods of string
// 1. length

const strLength = str.length;
// console.log(strLength);
// 2. uppercase & lowercase
// const caseChange = str1.toUpperCase();
// const caseChange = str1.toLowerCase();
// console.log(caseChange);

// 3. replace function
// const replaceStr = str1.replace("Rajesh", "Ram");
// const replaceStr = str2.replace(/rajesh/g, "Ram");

// console.log(replaceStr);

// 4. concat function

// const concatedStr = str1.concat(str);

// console.log(concatedStr);

// advance functions of string

// 5. slice
// const slicedStr = str.slice(10);
// const slicedStr = str.slice(1, 5);
// const str4 = " ram  rajesh";

// 0 1 2 3
// -4 -3 -2 -1

// const slicedStr = str4.slice(-5, -2);
// jes
// aje

// console.log(slicedStr.length);
// console.log(slicedStr);
// 6. substring
// const colors = "Blue, Purple, Green";
// const subColors = colors.substring(1, 4);

// console.log(subColors);

// 7. trim
// const colors = "       Blue, Purple, Green     ";
// console.log(colors.length);
// const trimColor = colors.trim();
// const trimColor = colors.trimStart();
// const trimColor = colors.trimEnd();

// console.log(trimColor.length);

//8. charAt

// const str8 = "rahul";
// const charStr = str8.charAt(4);
// console.warn(charStr);

// charCodeAt it return unicode of that character

const str8 = "rAhul sharmaram jain";
const str6 = "ram | rajesh | rakesh";
// const charStr = str8.charCodeAt(5);
// console.warn(charStr);

// 9. access particular value in string

console.error(str8[3]);

// const partStr = str8[2];
// str8[0] = "R"; //no error no expected output
// const replacedString = str8.replace("r", "R");
// console.log(replacedString);

// 10. split
const splitStr = str6.split("|");
// console.log(splitStr);

// reverse of a string
// "rahul" -->>> "luhar"

// "hah" -->> "hah" -->> log(entered string is perfectly matched)

// if string empty log kindly pass some value
// else string convert uppercase & convert those values  to arry
// possible user can pass space in your string you need take care that extra space is removed

// "" -> log("pass some value/string cannot be empty")
// "    ram      " -> -->> ["R","A","M"]
