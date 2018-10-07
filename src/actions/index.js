import axios from "axios";
import _ from "lodash";
import {
  FETCH_SYMBOL_SUCCESS,
  CHANGE_SYMBOL,
  RESET_SYMBOL,
  UPDATE_ORDER_BOOK,
  UPDATE_TRADE_HISTORY
} from "./constants";

export function fetchSymbols() {
  return function(dispatch) {
    return axios
      .get("http://localhost:3100/tickers")
      .then(response => {
        const symbols = _.map(response.data.symbols, "symbol");
        dispatch({
          type: FETCH_SYMBOL_SUCCESS,
          payload: symbols
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
}

export function resetSymbol() {
  return {
    type: RESET_SYMBOL,
    payload: null
  };
}

export function selectSymbol(symbol) {
  return function(dispatch) {
    dispatch({
      type: CHANGE_SYMBOL,
      payload: symbol
    });
    dispatch(fetchOrderBook(symbol));
    dispatch(fetchTradeHistory(symbol));
  };
}

export function fetchOrderBook(symbol) {
  return function(dispatch) {
    return axios
      .get(`http://localhost:3100/depth/${symbol}/10`)
      .then(response => {
        const { bids, asks } = response.data;
        dispatch({
          type: UPDATE_ORDER_BOOK,
          payload: { bids, asks }
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
}

export function fetchTradeHistory(symbol) {
  return function(dispatch) {
    return axios
      .get(`http://localhost:3100/trades/${symbol}/10`)
      .then(response => {
        const trades = _.map(response.data, trade => {
          return {
            price: trade.price,
            quantity: trade.qty,
            time: trade.time
          };
        });
        dispatch({
          type: UPDATE_TRADE_HISTORY,
          payload: trades
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
}
