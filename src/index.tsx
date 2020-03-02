import React from "react";
import ReactDOM from "react-dom";
import { createStore, Store as ReduxStore } from "redux";
import { incrementCounter, resetCounter } from "./actions";
import reducers, { Store } from "./reducers";

interface HelloProps {
  compiler: string;
  framework: string;
}

const store: ReduxStore<Store.All> = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(1));
store.dispatch(incrementCounter(1));
store.dispatch(incrementCounter(1));
store.dispatch(resetCounter());

const App = (props: HelloProps) => {
  return (
    <div>
      <p>
        Hello from {props.compiler} and {props.framework}!
      </p>
    </div>
  );
};

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("app")
);
