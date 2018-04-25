import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";

import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import AppRouter from "./routers/AppRouter";

// normalize will reset the browser to enforce cross browser compatibility
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
