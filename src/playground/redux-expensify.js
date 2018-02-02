import { createStore, combineReducers } from "redux";
import uuid from "uuid"; // until we have a database, use uuid to provide unique ids

// add expense
const addExpense = ({
  // destructure the incoming data and set the defaults
  description = "", // set description default to empty text
  note = "",
  amount = 0, // set amount default to 0
  createdAt = 0 // placeholder until we get to dateTimes
} = {}) => ({ // or an empty object if nothing is passed in
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(), // this comes from the uuid generator
    description, // these items come from the user
    note,
    amount,
    createdAt
  }
});

// remove expense
// destructure the id with possibility for empty object
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// edit expense
// destructure id and updates. updates could be empty. or nothing could be passed in
const editExpense = ({ id, updates = {} } = {}) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case "ADD_EXPENSE":
    // the spread operator returns a new array to avoid direct state manipulation, while still pulling in the old state
      return [...state, action.expense]; 

    case "REMOVE_EXPENSE":
      // returns a new array filtering on id
      // returns true when not a match = keep, returns false when matched = remove
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_EXPENSE":
      // return a new array, mapping over expense
      return state.map(expense => {
        // if the id is a match
        if (expense.id === action.id) {
          return {
            // return an new object
            // grabbing the current properties
            ...expense,
            ...action.updates // and overwriting with the new properties passed in
          };
        }
        return expense; // otherwise return the original expense
      });
  }
};

// set text filter
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// sort by date
const sortByDate = () => ({
  type: "SORT_BY_DATE",
})

// sort by amount
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
})

// set start date
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
})

// set end date
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate
})

//filters reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case "SET_TEXT_FILTER":
    // return an object with access to the object's values, and set the text value to the value being passed in
      return {
        ...state,
        text: action.text
      };

    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: 'date'
      };

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
  }
};

//timestamps (miliseconds)
// jan 1 1970 (unix epoch)

// get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    // sort by date descending (newest first)
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } 
    // sort by amount descending (largest first)
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

// store creation
const store = createStore(
  combineReducers({
    // combine reducers passes the called reducer to both of the below
    // these guys watch for items coming through that they're interested in
    expenses: expensesReducer, 
    filters: filtersReducer
  })
);

store.subscribe(() => {
  // watch the store and return the updated data
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// test data for expenses reducer - add expense
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: -1000 })
); 
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: 1000 })
); 

// // test data for expenses reducer - remove expense
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// // test data for expenses reducer - edit expense
// store.dispatch(
//   editExpense({
//     id: expenseTwo.expense.id,
//     update: {
//       amount: 500
//     }
//   })
// );

// // test data for filters reducer - set text filter
// store.dispatch(setTextFilter("coffee"));
// store.dispatch(setTextFilter(""));

// // test data for filters reducer - set date filter
// store.dispatch(sortByDate());

// // test data for filters reducer - set amount filter
store.dispatch(sortByAmount())

// // test data for filters reducer - set start date filter
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());

// // test data for filters reducer - set end date filter
// store.dispatch(setEndDate(999));


// test data for the store to work with
const demoState = {
  expenses: [
    {
      id: "asdf",
      description: "January Rent",
      note: "this was the final payment for that address",
      amount: 54500, // our amount will be tracked in pennies to reduce rounding errors
      createdAt: 0 // our created at will eventually be a timestamp
    }
  ],
  filters: {
    text: "rent",
    sortBy: "date", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
