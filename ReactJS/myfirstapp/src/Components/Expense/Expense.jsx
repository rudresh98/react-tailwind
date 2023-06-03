// react hooks use state
import { useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import logo from "../../logo.svg";
const Expense = () => {
  const initalValue = [];
  const [expenseData, setExpenseDate] = useState(initalValue);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onNameChangeHandler = (event) => {
    //     name = event.target.value; wrong syntax
    setName(event.target.value);
  };
  const onAmountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const onDateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const onSubmitHandler = () => {
    const data = { date, amount: +amount, name };
    setExpenseDate((prevState) => [...prevState, data]);
    setAmount("");
    setDate("");
    setName("");
  };
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                aria-label="name"
                aria-describedby="basic-addon1"
                onChange={(event) => onNameChangeHandler(event)}
                value={name}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                amount
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="amount"
                aria-label="amount"
                aria-describedby="basic-addon1"
                onChange={onAmountChangeHandler}
                value={amount}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                date
              </span>
              <input
                type="date"
                className="form-control"
                placeholder="date"
                aria-label="date"
                aria-describedby="basic-addon1"
                onChange={onDateChangeHandler}
                value={date}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <button
              type="button"
              className="btn btn-dark"
              onClick={onSubmitHandler}
            >
              add expense
            </button>
          </div>
          <div className="col-md">
            <button
              type="button"
              className="btn btn-dark"
              onClick={onSubmitHandler}
            >
              clear expense form
            </button>
          </div>
          <div className="col-md">
            <button
              type="button"
              className="btn btn-dark"
              onClick={onSubmitHandler}
            >
              clear expense
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="contanier">
        <div className="row">
          <div className="col-md">
            <p className="text-center fs-2 fw-medium font-monospace">
              Expense List
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            {expenseData.length ? (
              expenseData.map((ele, index, arr) => (
                <ExpenseList
                  name={ele.name}
                  amount={ele.amount}
                  date={ele.date}
                  index={index}
                />
              ))
            ) : (
              <p className="fs-4 text-center">enter expense</p>
            )}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <hr />
      <img src={logo} alt="logo" srcset="" width={100} height={100} />
    </>
  );
};
export default Expense;
