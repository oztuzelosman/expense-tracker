import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Buying Car", amount: 7000, date: new Date(2022, 3, 18) },
    { title: "Grocery Shopping", amount: 1000, date: new Date(2021, 9, 28) },
    { title: "Pharmacy", amount: 100, date: new Date(2022, 3, 8) },
    { title: "Book Shopping", amount: 500, date: new Date(2022, 1, 13) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
