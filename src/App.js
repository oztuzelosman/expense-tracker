import Expenses from "./components/Expenses";
import NewExpense from "./components/newexpenses/NewExpense";


function App() {
  const expenses = [
    { title: "Buying Car", amount: 7000, date: new Date(2022, 3, 18) },
    { title: "Grocery Shopping", amount: 1000, date: new Date(2021, 9, 28) },
    { title: "Pharmacy", amount: 10, date: new Date(2022, 3, 8) },
    { title: "Book Shopping", amount: 30, date: new Date(2022, 1, 13) },
    { title: "Travelling Fees", amount: 100, date: new Date(2021, 2, 3) }
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
