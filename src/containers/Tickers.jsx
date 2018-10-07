import { connect } from "react-redux";
import Tickers from "../components/Tickers";
import { selectSymbol } from "../actions";

const mapStateToProps = state => ({
  symbols: state.symbols
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(selectSymbol(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tickers);
