import React, { Component } from "react";
import * as redux from "redux";
import { connect } from "react-redux";
import { incrementCounter, Action } from "../actions";
import { Store } from "../reducers";

interface OwnProps {
  label: string;
}

interface ConnectedState {
  counter: {
    value: number;
  };
}

interface ConnectedDispatch {
  increment: (n: number) => void;
}

interface OwnState {}

class CounterComponent extends Component<
  ConnectedState & ConnectedDispatch & OwnProps,
  OwnState
> {
  _onClickIncrement = () => {
    this.props.increment(1);
  };

  render() {
    const { counter, label } = this.props;

    return (
      <div>
        <label>{label}</label>
        <pre>counter = {counter.value}</pre>
        <button ref="increment" onClick={this._onClickIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

const mapStateToProps = (
  state: Store.All,
  ownProps: OwnProps
): ConnectedState => ({
  counter: state.counter
});

const mapDispatchToProps = (
  dispatch: redux.Dispatch<Action>
): ConnectedDispatch => ({
  increment: (n: number) => {
    dispatch(incrementCounter(n));
  }
});

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
