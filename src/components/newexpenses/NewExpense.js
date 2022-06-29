import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const GrabExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onGrabExpenseData={GrabExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
