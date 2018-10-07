import React from "react";
import { shallow } from "enzyme";
import Tickers from "./containers/Tickers";
import TickerPage from "./containers/TickerPage";
import { App } from "./App";

it("renders only Tickers component when there is no current ticker", () => {
  const wrapper = shallow(<App currentSymbol={null} />);
  expect(wrapper.find(Tickers)).toHaveLength(1);
  expect(wrapper.find(TickerPage)).toHaveLength(0);
});

it("renders only TickerPage component when there is no current ticker", () => {
  const wrapper = shallow(<App currentSymbol={"BTCUSD"} />);
  expect(wrapper.find(Tickers)).toHaveLength(0);
  expect(wrapper.find(TickerPage)).toHaveLength(1);
});
