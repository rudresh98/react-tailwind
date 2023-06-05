// react hooks use state
import { useState } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseError from "../ExpenseError/ExpenseError";
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
    setMessage(msgStatus);
  };
  const onSelectExpenseHandler = (name) => {
    const removeData = expenseData.filter((ele, index) => ele.name !== name);
    setExpenseData(removeData);
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
        <ExpenseError showMessage={showMessage} message={message} />
        <div className="row">
          <div className="col-md">
            <p className="text-center fs-2 fw-medium font-monospace">
              Expense List
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          {/* <div className="col-md-8">
            {expenseData.length ? (
              expenseData.map((ele, index, arr) => (
                <ExpenseList
                  name={ele.name}
                  amount={ele.amount}
                  date={ele.date}
                  index={index}
                  key={index}
                  onSelectExpenseHandler={onSelectExpenseHandler}
                />
              ))
            ) : (
              <p className="fs-4 text-center">enter expense</p>
            )}
          </div> */}
          {expenseData.map((ele, index) => (
            <>
              <div
                className="container list-group pe-auto"
                onClick={() => onSelectExpenseHandler(ele.name)}
              >
                <div className="row mt-2 mb-2 alert alert-info">
                  <div className="col-md">
                    <div className="d-flex justify-content-between" key={index}>
                      <p>name:-{ele.name}</p>
                      <p>amount:-{ele.amount}</p>
                      <p>date:-{ele.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="col-md-2"></div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Expense;
