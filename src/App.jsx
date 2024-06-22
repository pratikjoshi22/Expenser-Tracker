import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpenses = (index) => {
    const updateExpenses = [...expenses];
    updateExpenses.splice(index, 1);
    setExpenses(updateExpenses);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="content-container">
        <div className="form-and-favorites">
          <SearchBar addExpense={addExpense} />
          <ExpenseList expenses={expenses} removeExpenses={removeExpenses}/>
        </div>
        <div className="chart-container">
          <ExpenseChart expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
