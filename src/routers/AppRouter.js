import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

import NotFoundPage from "../components/NotFoundPage";
import Header from "./../components/Header";
import HelpPage from "./../components/HelpPage";
import EditExpensePage from "./../components/EditExpensePage";
import AddExpensePage from "./../components/AddExpensePage";
import ExpenseDashboardPage from "./../components/ExpenseDashboardPage";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
