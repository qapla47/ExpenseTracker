import { createStore, combineReducers } from "redux";

import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
  // store creation
  const store = createStore(
    combineReducers({
      // combine reducers passes the called reducer to both of the below
      // these guys watch for items coming through that they're interested in
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
