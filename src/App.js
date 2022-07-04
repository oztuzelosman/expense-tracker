import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/newexpenses/NewExpense";
import ButtonAddExpense from "./components/ButtonAddExpense";

const Dummy_Expenses = [
  { id: "01", title: "Buying Car", amount: 7000, date: new Date(2022, 3, 18) },
  { id: "02", title: "Grocery Shopping", amount: 1000, date: new Date(2021, 9, 28) },
  { id: "03", title: "Pharmacy", amount: 10, date: new Date(2022, 3, 8) },
  { id: "04", title: "Book Shopping", amount: 30, date: new Date(2022, 1, 13) },
  { id: "05", title: "Travelling Fees", amount: 100, date: new Date(2021, 2, 3) },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses])
  };

  return (
    <div>
      <ButtonAddExpense></ButtonAddExpense>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
