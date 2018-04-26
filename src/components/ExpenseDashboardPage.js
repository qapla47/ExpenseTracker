import React from "react";
import ReactDOM from "react-dom";


import ExpenseList from './ExpenseList';
import ExpenseListFilters from './expenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

