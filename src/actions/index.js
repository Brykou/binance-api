import axios from "axios";
import _ from "lodash";
import { FETCH_SYMBOL_SUCCESS, CHANGE_SYMBOL } from "./constants";

export function fetchSymbolsSuccess(symbols) {
  return {
    type: FETCH_SYMBOL_SUCCESS,
    payload: symbols
  };
}

export function changeCurrentSymbol(symbol) {
  return {
    type: CHANGE_SYMBOL,
    payload: symbol
  };
}

export function fetchSymbols() {
  return function(dispatch) {
    return axios
      .get("https://api.binance.com/api/v1/exchangeInfo")
      .then(response => {
        const symbols = _.map(response.data.symbols, "symbol");
        dispatch(fetchSymbolsSuccess(symbols));
      })
      .catch(error => {
        console.error(error);
      });
  };
}
