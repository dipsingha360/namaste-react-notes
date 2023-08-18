// first react codes

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World from react !"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
