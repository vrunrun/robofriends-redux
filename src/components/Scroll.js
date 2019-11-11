import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "3px rgba(0,128,128,1)",
        height: "800px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
