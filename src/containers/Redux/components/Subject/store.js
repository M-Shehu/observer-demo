function createStore(reducer, initialState) {
  let state = initialState;

  // Setup listners to keep track of when the state is changed
  // to triger rerenders (observer pattern)
  const listeners = [];

  const subscribe = listener => listeners.push(listener);

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    // call each listener function when the state is changed
    // its just a notification that state is changed
    listeners.forEach(l => l());
  };

  return {
    subscribe,
    getState,
    dispatch,
  };
}

function reducer(state, action) {
  if (action.type === "CHANGE_COLOR") {
    return {
      color: action.color,
    };
  }

  return state;
}

// set initial state to pass into to store
const initialState = { color: "" };
// initialize the store
const store = createStore(reducer, initialState);

export default store;
