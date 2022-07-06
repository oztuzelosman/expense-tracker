import React, { useState } from "react";
import FilterExpenses from "./filterexpenses/FilterExpenses";
import "./Expenses.css";
import Card from "./Card";
import LogicExpList from "./LogicExpList";
import ExpensesChart from "./ExpensesChart";

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

  return (
    <Card className="expenses">
      <FilterExpenses
        selected={filteredYear}
        onGetFilterData={FilterData}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <LogicExpList itemprop={filteredExpenses}></LogicExpList>
    </Card>
  );
}

export default Expenses;
