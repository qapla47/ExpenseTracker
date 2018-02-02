import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expense Tracker</h1>
    <NavLink exact to="/" className="nav-link" activeClassName="is-active">
      Dashboard
    </NavLink>{" "}
    <NavLink to="/create" className="nav-link" activeClassName="is-active">
      Create an Expense
    </NavLink>{" "}

  </header>
);

// const ExpenseDashboardPage = () => (
//   <div>This is from my dashboard component</div>
// );


export default Header;
