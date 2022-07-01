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
  return (
    <Card className="expenses">
      <FilterExpenses
        selected={filteredYear}
        onGetFilterData={FilterData}
      ></FilterExpenses>

      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
