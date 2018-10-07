import React from "react";
import PropTypes from "prop-types";
import "./Tickers.css";

class Tickers extends React.Component {
  static propTypes = {
    symbols: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { symbols, onClick } = this.props;

    return (
      <ul className="symbols">
        {symbols.map(symbol => (
          <li key={symbol} onClick={() => onClick(symbol)}>
            {symbol}
          </li>
        ))}
      </ul>
    );
  }
}

export default Tickers;
