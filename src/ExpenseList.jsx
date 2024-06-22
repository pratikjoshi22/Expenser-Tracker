import React from "react";

const ExpenseList = ({ expenses ,removeExpenses}) => {
  const handleRemove = (index) => {
      removeExpenses(index)
  };
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.title} - ${expense.amount.toFixed(2)} ({expense.category})
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
