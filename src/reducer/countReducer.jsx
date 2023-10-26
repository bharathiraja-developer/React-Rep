// define a initial state
const initialState = {
  count: 0,
  clickHistory: [],
};

// define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "incr":
      return {
        count: state.count + 1,
        clickHistory: state.clickHistory.concat("I"),
      };

    case "decr":
      return {
        count: state.count - 1,
        clickHistory: state.clickHistory.concat("D"),
      };

    case "reset":
      return { count: 0, clickHistory: state.clickHistory.concat("R") };
  }
}

export { initialState, reducer };
