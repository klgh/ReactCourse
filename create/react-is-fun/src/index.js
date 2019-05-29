import React from "react";
import ReactDOM from "react-dom";

var style = {
  backgroundColor: "orange",
  color: "white",
  fontFamily: "Arial"
};

ReactDOM.render(
  <div style={style}>
    <h1 id="heading">Hello World</h1>
    <p>glad you're here</p>
  </div>,
  document.getElementById("root")
);
