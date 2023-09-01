// React element - core code of creating element
const heading = React.createElement(
  "h1",
  { id: heading },
  "Namaste react using react element"
);

// JSX - HTML like or XML like syntax
const jsxheading = <h1 id="heading">Namaste react using JSX</h1>;

// React functional componet
const HeadingComponent = () => (
  <>
    <TitleComponent />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quod impedit
      reprehenderit repudiandae, quas eius quaerat eos rem commodi odio!
    </p>
  </>
);

// without return keyword
const TitleComponent = () => (
  <h1>This is a title from functional component now</h1>
);

// with return keyword
const TitleComponent2 = () => {
  return { jsxheading };
};

//whth normal function
const TitleComponent3 = function () {
  return <h1>This is a title from functional component now</h1>;
};

// Creating root and reandering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
