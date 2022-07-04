import "./LogicExpList.css"
import ExpenseItem from "./ExpenseItem";


const LogicExpList = (props)=>{
    let expenseContent = <p>No content is available</p>;

    if (props.itemprop.length > 0) {
      expenseContent = props.itemprop.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ));
    }
}

export default LogicExpList;