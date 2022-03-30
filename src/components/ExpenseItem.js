import "./ExpenseItem.css";

function ExpenseItem(props) {
 /*  const expenseDate = new Date(2022, 3, 18);
  const expenseTitle = "Buying a car";
  const expenseAmount = 7000; */

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
