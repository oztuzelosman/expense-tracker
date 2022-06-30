import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const GrabExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData)
  /*   console.log(expenseData); to show data only in app.js*/ 
  };
  return (
    <div className="new-expense">
      <ExpenseForm onGrabExpenseData={GrabExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
