// expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
