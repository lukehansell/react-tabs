import React from "react";
import { create } from "react-test-renderer";
import TabHeader from ".";

test("it renders the content", () => {
  const component = <TabHeader>bar</TabHeader>;
  const rendered = create(component);
  const tree = rendered.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("with onClick handler", () => {
  describe("when element is clicked", () => {
    test("it calls the onClick handler", () => {
      const onClick = jest.fn();
      const component = <TabHeader onClick={onClick}>bar</TabHeader>;
      const wrapper = shallow(component);
      wrapper.simulate("click");
      expect(onClick).toHaveBeenCalled();
    });
  });
});
