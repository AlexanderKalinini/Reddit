import { Dropdown } from "../Dropdown";
import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("Dropdown", () => {
  test("should render", () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />);
			expect(wrapper).toBeDefined()
			expect(wrapper.find('#button')).toBeDefined()
    
  });
});
