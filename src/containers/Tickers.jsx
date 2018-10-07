import { connect } from "react-redux";
import Tickers from "../components/Tickers";
import { changeCurrentSymbol } from "../actions";

const mapStateToProps = state => ({
  symbols: state.symbols
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(changeCurrentSymbol(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tickers);
