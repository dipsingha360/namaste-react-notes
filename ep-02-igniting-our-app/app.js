// 2nd react class

import React from "react";
import ReactDOM from "react";

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World from react !"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
