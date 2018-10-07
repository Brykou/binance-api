import React from "react";
import PropTypes from "prop-types";
import "./TradeHistory.css";

class TradeHistory extends React.Component {
  static propTypes = {
    trades: PropTypes.arrayOf(
      PropTypes.exact({
        price: PropTypes.string.isRequired,
        quantity: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
  };

  render() {
    const { trades } = this.props;
    return (
      <table className="table is-bordered is-striped is-fullwidth trades">
        <thead>
          <tr>
            <th scope="col" colSpan="3">
              Trades
            </th>
          </tr>
          <tr>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col" className="hiddenOnMobile">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index}>
              <td>{trade.price}</td>
              <td>{trade.quantity}</td>
              <td className="hiddenOnMobile">
                {new Date(trade.time).toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TradeHistory;
