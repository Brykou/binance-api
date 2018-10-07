import React from "react";
import { shallow } from "enzyme";
import Tickers from "./";

it("renders empty list without symbols", () => {
  const wrapper = shallow(<Tickers symbols={[]} onClick={() => null} />);
  expect(wrapper.find("ul")).toHaveLength(1);
  expect(wrapper.find("li")).toHaveLength(0);
});

it("renders correct number of items", () => {
  const wrapper = shallow(
    <Tickers symbols={["ETHUSD", "BTCUSD"]} onClick={() => null} />
  );
  expect(wrapper.find("ul")).toHaveLength(1);
  expect(wrapper.find("li")).toHaveLength(2);
});
