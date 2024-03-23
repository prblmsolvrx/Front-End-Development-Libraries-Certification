/*A reducer takes state and action as arguments, and it always returns a new state
Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly. */

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if (action.type === "LOGIN") {
    return {
      login: true
    };
  } else {
    return state;
  }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN"
  };
};