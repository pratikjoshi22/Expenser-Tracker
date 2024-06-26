import React, { useContext, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import { ExpenseContext } from "./ExpenseContext";

function App() {


  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="content-container">
        <div className="form-and-favorites">
          <SearchBar />
          <ExpenseList />
        </div>
        <div className="chart-container">
          <ExpenseChart  />
        </div>
      </div>
    </div>
  );
}

export default App;
