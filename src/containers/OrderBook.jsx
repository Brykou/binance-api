import { connect } from "react-redux";
import OrderBook from "../components/OrderBook";

const mapStateToProps = state => ({
  bids: state.orderBook ? state.orderBook.bids : [],
  asks: state.orderBook ? state.orderBook.asks : []
});

export default connect(
  mapStateToProps,
  null
)(OrderBook);
