import { connect } from "react-redux";
import TickerPage from "../components/TickerPage";
import { resetSymbol } from "../actions";

const mapDispatchToProps = dispatch => ({
  resetSymbol: () => dispatch(resetSymbol())
});

export default connect(
  null,
  mapDispatchToProps
)(TickerPage);
