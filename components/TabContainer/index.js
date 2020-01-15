import React, { useState } from "react";
import TabHeader from "../TabHeader";
export default ({ children }) => {
  const headers =
    React.Children.map(children, child => {
      return child.props.title;
    }) || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeChild = React.Children.toArray(children)[activeIndex];

  return (
    <>
      <div className="tab-area">
        {headers.map((header, i) => (
          <TabHeader
            key={i}
            isActive={activeIndex === i}
            onClick={() => setActiveIndex(i)}
          >
            {header}
          </TabHeader>
        ))}
      </div>
      <div className="content-area">{activeChild}</div>
    </>
  );
};
