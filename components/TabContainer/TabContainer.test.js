import React from "react";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";
import TabContainer from ".";
import Tab from "../Tab";
import TabHeader from "../TabHeader";

describe("without any tabs", () => {
  let rendered;

  beforeEach(() => {
    const component = <TabContainer></TabContainer>;
    rendered = shallow(component);
  });

  test("it renders nothing", () => {
    expect(rendered).toHaveText("");
  });
});

describe("with a tab", () => {
  let rendered;
  beforeEach(() => {
    const tab = <Tab title="foo">bar</Tab>;
    const component = <TabContainer>{tab}</TabContainer>;
    rendered = shallow(component);
  });

  describe("in the tab area", () => {
    test("it renders the header for the tab", () => {
      expect(rendered.find(".tab-area")).toContainExactlyOneMatchingElement(
        TabHeader
      );
    });

    test("the tab header renders the title from the tab", () => {
      expect(rendered.find(".tab-area").find(TabHeader)).toHaveProp(
        "children",
        "foo"
      );
    });

    test("the rendered tab is marked as active", () => {
      expect(rendered.find(".tab-area").find(TabHeader)).toHaveProp(
        "isActive",
        true
      );
    });
  });

  describe("in the content area", () => {
    test("it renders the content of the tab", () => {
      expect(rendered.find(".content-area")).toContainExactlyOneMatchingElement(
        Tab
      );
    });
  });
});

describe("with multiple tabs", () => {
  let rendered;
  const tab1 = <Tab title="foo">bar</Tab>;
  const tab2 = <Tab title="baz">qux</Tab>;
  const tab3 = <Tab title="tasty">marshmallow</Tab>;

  beforeEach(() => {
    const component = (
      <TabContainer>
        {tab1}
        {tab2}
        {tab3}
      </TabContainer>
    );

    rendered = shallow(component);
  });
  describe("in the tab area", () => {
    test("it renders headers for each tab", () => {
      expect(rendered.find(".tab-area")).toContainMatchingElements(
        3,
        TabHeader
      );
    });

    test("the headers have the correct titles from the tabs", () => {
      expect(
        rendered
          .find(".tab-area")
          .find(TabHeader)
          .map(header => header.prop("children"))
      ).toEqual(["foo", "baz", "tasty"]);
    });

    test("the first tab is set as active", () => {
      expect(
        rendered
          .find(".tab-area")
          .find(TabHeader)
          .at(0)
      ).toHaveProp("isActive", true);
    });

    test("all other tabs are not active", () => {
      expect(
        rendered
          .find(".tab-area")
          .find(TabHeader)
          .filterWhere(tab => tab.prop("isActive") === true)
      ).toContainExactlyOneMatchingElement(TabHeader);
    });
  });

  describe("in the content area", () => {
    test("only one child is rendered", () => {
      expect(rendered.find(".content-area")).toContainExactlyOneMatchingElement(
        Tab
      );
    });

    test("only the first child is rendered", () => {
      expect(rendered.find(".content-area").find(Tab)).toHaveProp(
        "children",
        "bar"
      );
    });
  });

  describe("when another tab is clicked", () => {
    beforeEach(() => {
      rendered
        .find(".tab-area")
        .find(TabHeader)
        .at(1)
        .simulate("click");
    });

    describe("in the tab area", () => {
      test("it renders all the tab headers", () => {
        expect(rendered.find(".tab-area")).toContainMatchingElements(
          3,
          TabHeader
        );
      });

      test("the tabs have the correct names", () => {
        expect(
          rendered
            .find(".tab-area")
            .find(TabHeader)
            .map(header => header.prop("children"))
        ).toEqual(["foo", "baz", "tasty"]);
      });

      test("the clicked tab's header is set as active", () => {
        expect(
          rendered
            .find(".tab-area")
            .find(TabHeader)
            .at(1)
        ).toHaveProp("isActive", true);
      });

      test("all other tabs are not active", () => {
        expect(
          rendered
            .find(".tab-area")
            .find(TabHeader)
            .filterWhere(tab => tab.prop("isActive") === true)
        ).toContainExactlyOneMatchingElement(TabHeader);
      });
    });

    describe("in the content area", () => {
      test("only the clicked tab's content is displayed", () => {
        expect(rendered.find(".content-area").find(Tab)).toHaveProp(
          "children",
          "qux"
        );
      });
    });
  });
});

describe("snapshots", () => {
  const snapshots = {
    "with no children": <TabContainer />,
    "with one child": (
      <TabContainer>
        <Tab title="foo">bar</Tab>
      </TabContainer>
    ),
    "with multiple children": (
      <TabContainer>
        <Tab title="foo">bar</Tab>
        <Tab title="baz">qux</Tab>
        <Tab title="tasty">pancake</Tab>
      </TabContainer>
    )
  };

  Object.keys(snapshots).forEach(testName => {
    test(testName, () => {
      const component = snapshots[testName];
      const rendered = create(component);
      const tree = rendered.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
