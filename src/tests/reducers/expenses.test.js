import moment from 'moment';
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should NOT remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "5"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: '4',
    description: "Labatte Blue Light",
    note: "boat beer",
    amount: 300,
    createdAt: moment(0).subtract(6, "days").valueOf()
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense])
});

test("should edit an expense", () => {
  const amount = 550;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test("should NOT edit an expense if id not found", () => {
  const amount = 550;
  const action = {
    type: "EDIT_EXPENSE",
    id: 12,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
