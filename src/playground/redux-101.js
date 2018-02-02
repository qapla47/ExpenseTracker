// 
// Store Creation
// 

import { createStore } from "redux";

// 
// Reducers
// 1. Reducers are pure functions- their output is only determined by their input, not reaching outside of their scope to obtain or return data (don't reach for a global variable to compute, don't push to a global variable to return)
// 2. NEVER change state or action directly - just like with this.setState - return instead, an object which represents the new state


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
            return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
}

// 
// Actions
// 

const store = createStore(countReducer);

// show me what's happening to my store unless I call unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//
// Action Generators
//

// action generator - functions that return action objects
const add = ({ a, b}, c) => {
  return a + b + c;
}
console.log(add({a:1, b:12}, 100))

// we're defining the payload and destructuring it to incrementBy. The default to 1 if an object is passed in, otherwise it's value is set to an empty object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
  })

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

// with set a value is required, so no need to set a default
const setCount = ({count}) => ({
  type: 'SET',
  count
})

// with reset no data can be passed in, it will always reset to 0
const resetCount = () => ({
  type: 'RESET',
})

// 
// Action Calls
// 


// Actions - are an object that gets sent to the store
// don't forget that type is required

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy:5}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({count: 101}));