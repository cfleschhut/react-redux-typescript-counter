import React from "react";
import ReactDOM from "react-dom";
import { createStore, Store as ReduxStore } from "redux";
import { Provider } from "react-redux";
import reducers, { Store } from "./reducers";
import { Counter } from "./components/Counter";

const store: ReduxStore<Store.All> = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState());
});

const App: React.FunctionComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Counter label="Counter" />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
