import React, { Children, createContext, useState } from "react";

const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (index) => {
    const updateExpenses = [...expenses];
    updateExpenses.splice(index, 1);
    setExpenses(updateExpenses);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
export { ExpenseContext, ExpenseProvider };
