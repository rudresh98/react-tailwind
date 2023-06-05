// react hooks use state
import { useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import logo from "../../logo.svg";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
const Expense = () => {
  return (
    <>
      <ExpenseForm />
      <hr />
      {/* <div className="contanier">
        {showMessage && (
          <div className="row">
            <div className="col-md">
              <p className="text-center">{message}</p>
            </div>
          </div>
        )}
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
      </div> */}
      <hr />
      {/* <img src={logo} alt="logo" srcSet="" width={100} height={100} /> */}
    </>
  );
};
export default Expense;
