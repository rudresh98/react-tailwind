// react hooks use state
import { useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
const Expense = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const onExpenseDataHandler = (data) => {
    console.log(data);
    setExpenseData((prevState) => [...prevState, data]);
  };
  const onShowMessageHandler = (msg) => {
    setShowMessage(msg);
  };
  const onMessageHandler = (msgStatus) => {
    console.log(msgStatus);
    setMessage(msgStatus);
  };
  return (
    <>
      <ExpenseForm
        onExpenseDataHandler={onExpenseDataHandler}
        onShowMessageHandler={onShowMessageHandler}
        onMessageHandler={onMessageHandler}
      />
      <hr />
      <div className="contanier">
        {showMessage && (
          <div className="row">
            <div className="col-md">
              <p className="text-center text-danger fs-3 text">
                Error :-{message}
              </p>
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
                  key={index}
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
    </>
  );
};
export default Expense;
