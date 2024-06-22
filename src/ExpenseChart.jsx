import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

const ExpenseChart = ({ expenses }) => {
  Chart.register(ArcElement, Tooltip, Legend);

  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map((category) =>
          expenses
            .filter((expense) => expense.category === category)
            .reduce((sum, expense) => sum + expense.amount, 0)
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 20,
          padding: 20,
        },
      },
    },
  };

  return (
    <div>
      <h2>Expenses Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
