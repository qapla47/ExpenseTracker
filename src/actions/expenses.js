import uuid from "uuid";

// add expense
export const addExpense = ({
  // destructure the incoming data and set the defaults
  description = "", // set description default to empty text
  note = "",
  amount = 0, // set amount default to 0
  createdAt = 0 // placeholder until we get to dateTimes
} = {}) => ({
  // or an empty object if nothing is passed in
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
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// edit expense
// destructure id and updates. updates could be empty. or nothing could be passed in
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
