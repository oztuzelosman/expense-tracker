import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const GrabExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData)
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onGrabExpenseData={GrabExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
