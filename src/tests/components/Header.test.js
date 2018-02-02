import React from "react";
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

import Header from "../../components/Header";
// test shallow to check only what is being rendered, rather than everything that's being rendered

test("should render header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

// snapshots allow us to track changes to data over time

