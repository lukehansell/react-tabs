import React from "react";
import { create } from "react-test-renderer";
import Tab from ".";

test("it renders the content", () => {
  const component = <Tab title="foo">bar</Tab>;
  const rendered = create(component);
  const tree = rendered.toJSON();
  expect(tree).toMatchSnapshot();
});
