import {
  FETCH_SYMBOL_SUCCESS,
  CHANGE_SYMBOL,
  UPDATE_ORDER_BOOK,
  UPDATE_TRADE_HISTORY
} from "../actions/constants";

const initialState = {
  symbols: [],
  currentSymbol: null,
  orderBook: null,
  trades: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SYMBOL_SUCCESS:
      return Object.assign({}, state, {
        symbols: action.payload
      });
    case CHANGE_SYMBOL:
      return Object.assign({}, state, {
        currentSymbol: action.payload
      });
    case UPDATE_ORDER_BOOK:
      return Object.assign({}, state, {
        orderBook: action.payload
      });
    case UPDATE_TRADE_HISTORY:
      return Object.assign({}, state, {
        trades: action.payload
      });
    default:
      return state;
  }
};
