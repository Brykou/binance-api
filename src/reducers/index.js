import { FETCH_SYMBOL_SUCCESS, CHANGE_SYMBOL } from "../actions/constants";

const initialState = {
  symbols: [],
  currentSymbol: null
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
    default:
      return state;
  }
};
