import {
  addExpense,
  editExpense,
  removeExpense
} from "./../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should set edit expense action object", () => {
  const action = editExpense("abc123", {note: "New note!" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: { note: "New note!"}
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Mortgate',
    amount: '69542',
    createdAt: 1000,
    note: 'payment for January'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup the add expense object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: "",
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})