import { combineReducers } from "redux";
import { Action } from "../actions";

export namespace Store {
  export type Counter = {
    value: number;
  };

  export type All = {
    counter: Counter;
  };
}

const initialState: Store.Counter = {
  value: 0
};

function counter(
  state: Store.Counter = initialState,
  action: Action
): Store.Counter {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        value: state.value + action.delta
      };

    case "RESET_COUNTER":
      return {
        value: 0
      };

    default:
      return state;
  }
}

const reducers = combineReducers({
  counter
});

export default reducers;
