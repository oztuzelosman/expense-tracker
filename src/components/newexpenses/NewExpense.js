import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const GrabExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShown(false)
  };

  const [isShown, setIsShown] = useState(false);

  const clickHandler = () => {
    setIsShown(true);
  };

  const stopEditing = () => {
    setIsShown(false);
  };

  return (
    <div className="new-expense">
      {!isShown && <button onClick={clickHandler}>Add New Expense</button>}
      {isShown && <ExpenseForm onGrabExpenseData={GrabExpenseDataHandler} onCancel={stopEditing} />}
    </div>
  );
};

export default NewExpense;
