import React, { Component } from "react";
import { connect } from "react-redux";
import Tickers from "./containers/Tickers";
import "./App.css";

class App extends Component {
  render() {
    const { currentSymbol } = this.props;
    return <div>{currentSymbol ? null : <Tickers />}</div>;
  }
}

export default connect(
  state => ({
    currentSymbol: state.currentSymbol
  }),
  null
)(App);
