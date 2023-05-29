console.log("todolist");
const data = [1, 2, 3];
let title = "";
const onChangeInputHandler = (e) => {
  //   console.log(e.target.value);
  title = e.target.value;
};
const onSubmitForm = (e) => {
  e.preventDefault();
  console.log(title);
  console.log("hello");
  result.appendChild(title);
};

const result = document.getElementById("result");

// title.addEventListener("keyup", (e) => {
//   console.log(e.target.value);
// });
data.forEach((ele, i) => {
  result.innerHTML += "<br/>" + ele;
});
