import React from "react";
import "./ExpenseList.css";
const ExpenseList = ({ name, amount, date, index, onSelectExpenseHandler }) => {
  const onSelectExpense = (n) => {
    onSelectExpenseHandler(n);
  };
  return (
    <>
      <div className="container list-group pe-auto">
        <div className="row mt-2 mb-2 alert alert-info">
          <div className="col-md">
            <div className="d-flex justify-content-between" key={index}>
              <p
                onClick={(name) => {
                  onSelectExpense(name);
                }}
              >
                name:-{name}
              </p>
              <p>amount:-{amount}</p>
              <p>date:-{date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
