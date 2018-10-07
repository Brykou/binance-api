import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./OrderBook.css";

class TableLayout extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  render() {
    const { data, label, className } = this.props;
    return (
      <table
        className={classNames(
          "table is-bordered is-striped is-fullwidth",
          className
        )}
      >
        <thead>
          <tr>
            <th scope="col" colSpan="2">
              {label}
            </th>
          </tr>
          <tr>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

class OrderBook extends React.Component {
  static propTypes = {
    bids: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
    asks: PropTypes.arrayOf(PropTypes.arrayOf).isRequired
  };

  render() {
    const { bids, asks } = this.props;
    return (
      <div className="orderBook">
        {bids.length > 0 ? (
          <TableLayout data={bids} label="Bids" className="bids" />
        ) : null}
        {asks.length > 0 ? (
          <TableLayout data={asks} label="Asks" className="asks" />
        ) : null}
      </div>
    );
  }
}

export default OrderBook;
