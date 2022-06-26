import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {

  useState();

  let initialTitle = props.title;

  const clickHandler = () => {
    initialTitle = "UPDATED!!";
    console.log(initialTitle)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{initialTitle}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button onClick={clickHandler}> Click Me!</button>
    </Card>
  );
}

export default ExpenseItem;
