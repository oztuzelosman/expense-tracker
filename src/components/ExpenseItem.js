
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
const clickHandler = () =>{ console.log("FUCK!!")}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button onClick={clickHandler}> Click Me!</button>
    </Card>
  );
}

export default ExpenseItem;
