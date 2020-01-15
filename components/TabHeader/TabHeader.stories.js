import React from "react";
import { action } from "@storybook/addon-actions";
import TabHeader from ".";

export default {
  title: "Tab Header"
};

export const notActive = () => (
  <TabHeader onClick={action("clicked")}>Not Active Header</TabHeader>
);

export const active = () => (
  <TabHeader onClick={action("clicked")} isActive={true}>
    Active Header
  </TabHeader>
);
