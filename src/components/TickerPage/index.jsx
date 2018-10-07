import React from "react";
import OrderBook from "../../containers/OrderBook";
import TradeHistory from "../../containers/TradeHistory";
import "./TickerPage.css";

export default class TickerPage extends React.Component {
  render() {
    const { resetSymbol } = this.props;
    return (
      <div className="tickerPage">
        <button onClick={resetSymbol}>Back to Ticker list</button>
        <div className="container">
          <OrderBook />
          <TradeHistory />
        </div>
      </div>
    );
  }
}
