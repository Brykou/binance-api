import React, { Component } from "react";
import { connect } from "react-redux";
import Tickers from "./containers/Tickers";
import TickerPage from "./containers/TickerPage";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  static propTypes = {
    currentSymbol: PropTypes.string
  };

  render() {
    const { currentSymbol } = this.props;
    return (
      <div className="app">{currentSymbol ? <TickerPage /> : <Tickers />}</div>
    );
  }
}

export default connect(
  state => ({
    currentSymbol: state.currentSymbol
  }),
  null
)(App);

export { App };
