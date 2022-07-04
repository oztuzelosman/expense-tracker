import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import FilterExpenses from "./filterexpenses/FilterExpenses";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const FilterData = (data) => {
    setFilteredYear(data);
    console.log(data);
    console.log("in expenses.js");
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No content is available</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }

  return (
    <Card className="expenses">
      <FilterExpenses
        selected={filteredYear}
        onGetFilterData={FilterData}
      ></FilterExpenses>
      {expenseContent}
    </Card>
  );
}

export default Expenses;
