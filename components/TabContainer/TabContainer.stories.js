import React from "react";
import TabContainer from ".";
import Tab from "../Tab";

export default {
  title: "Tab Container"
};

export const withNoTabs = () => <TabContainer />;

export const withSingleTab = () => (
  <TabContainer>
    <Tab title="tab1">content for tab1</Tab>
  </TabContainer>
);

export const withMultipleTabs = () => (
  <TabContainer>
    <Tab title="tab1">content for tab1</Tab>
    <Tab title="tab2">content for tab2</Tab>
  </TabContainer>
);
