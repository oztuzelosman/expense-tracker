import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/newexpenses/NewExpense";
import "./components/ButtonAddExpense.css";

const Dummy_Expenses = [
  { id: "01", title: "Buying Car", amount: 7000, date: new Date(2022, 3, 18) },
  {
    id: "02",
    title: "Grocery Shopping",
    amount: 1000,
    date: new Date(2021, 9, 28),
  },
  { id: "03", title: "Pharmacy", amount: 10, date: new Date(2022, 3, 8) },
  { id: "04", title: "Book Shopping", amount: 30, date: new Date(2022, 1, 13) },
  {
    id: "05",
    title: "Travelling Fees",
    amount: 100,
    date: new Date(2021, 2, 3),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const [isShown, setIsShown] = useState(false);

  const clickHandler = () => {
    setIsShown(true);
  };

  const cancelHandler = () => {
    setIsShown(false);
  };

  return (
    <div>
      <div className="add-expense">
        <button onClick={clickHandler}>Add New Expense</button>
      </div>
      {isShown && (
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <div className="add-expense">
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </div>
      )}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
