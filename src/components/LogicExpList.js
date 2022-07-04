import "./LogicExpList.css";
import ExpenseItem from "./ExpenseItem";

const LogicExpList = (props) => {
  if (props.itemprop.length === 0) {
    return <h2 className="expenses-list__fallback">No Available Content</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.itemprop.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default LogicExpList;
