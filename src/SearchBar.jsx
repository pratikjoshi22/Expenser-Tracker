import React, { useContext, useState } from 'react';
import { ExpenseContext } from './ExpenseContext';

const SearchBar = () => {

  const {addExpense} = useContext(ExpenseContext)
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const expenseAmount = parseFloat(amount)
      if(expenseAmount > 0)
      {
        const expense = {
          title,
          amount: expenseAmount,
          category,
          date: new Date(),
        };
        addExpense(expense);
        setTitle('');
        setAmount('');
        setCategory('');

      }
      else{
        alert("Amount should be greater than 0");
      }
    
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Expense Title"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default SearchBar;
