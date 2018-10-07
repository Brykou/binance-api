import { connect } from "react-redux";
import TradeHistory from "../components/TradeHistory";

const mapStateToProps = state => ({
  trades: state.trades ? state.trades : []
});

export default connect(
  mapStateToProps,
  null
)(TradeHistory);
