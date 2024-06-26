import React, { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

const ExpenseList = () => {

  const {expenses,removeExpense} = useContext(ExpenseContext)
  const handleRemove = (index) => {
      removeExpense(index)
  };
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.title} - ${expense.amount.toFixed(2)} - ({expense.category}) - {expense.date.toLocaleDateString()}

            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
