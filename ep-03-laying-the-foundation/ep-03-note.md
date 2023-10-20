# Episode 03 - Layint the foundation

In the previous day, I learned about the bundler and how it makes our app faster. Our app is dependent on the bundler which further depends upon other packages, and those can have dependencies on other packages, which is known as transitive dependencies.

I discussed browserlist yesterday, and when we write browserlist in the package.json file, what happens is our code is converted so that it can be run in older JavaScript engines.

But the question is: who does that? Does React do that or does Parcel do that? Interesting question, right? The answer is neither of those two does that. Babel does that!

Now, I'm confused. I didn't install Babel yesterday. Do I have to install it? No, I don't because it came along with Parcel. When I installed Parcel, Babel and a lot more packages came along with it.

## Babel

### What is Babel?

Babel is a popular tool used in web development to convert ECMAScript 2015+ code (also known as ES6+) into backwards-compatible versions of JavaScript that can run on older browsers or environments that don't support the latest syntax and features.

Babel works by analyzing and transforming your code, converting any modern JavaScript features that might not be supported by all browsers or environments into equivalent code that is widely compatible. This allows developers to write cutting-edge, modern JavaScript while still being able to support older systems.

In addition to converting modern syntax, Babel can also perform other tasks such as transforming JSX syntax used by React into regular JavaScript, and adding polyfills for features that are missing from certain browsers or environments.

To run my project, I have to run `npx parcel index.html`, which takes time to write. So I'm going to build a script inside `package.json`:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

Now, to run, I'll use `npm run start` or `npm start`, which is faster to write.

At the end of the project, it is necessary that I'll remove all the `console.log()`. To do so, there is a package `babel-plugin-transform-remove-console`, which removes all the `console.log()` statements.

After installing this package, I created a folder `.babelrc`, and in this folder, I'll write the given config:

```json
{
  "plugins": [
    [
      "transform-remove-console",
      {
        "exclude": ["error", "warn"]
      }
    ]
  ]
}
```

Now all the `console.log()` statements are disappeared just like magic.

## Introduction of keys

When a React element has multiple children, each child should have a unique key that is used by React for efficient tree conversion.

Here's an example code snippet that creates two headings using `React.createElement()` and attaches them to a root element:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    key: "1",
  },
  "Heading one"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
    key: "2",
  },
  "Heading two"
);

const container = React.createElement("div", {}, [heading1, heading2]);

root.render(container);
```

The `React.createElement()` function returns an object that represents the HTML code and puts it upon the DOM. I've come across a common problem where I need to create a large HTML structure using React's `createElement()` method. While this method works fine for small structures, it quickly becomes unmanageable for larger ones.

So now, instead of writing tedious code with `createElement()`, I can write HTML-like code in my JavaScript files and let JSX do the heavy lifting. It's a game-changer for my React development!

---

## What is JSX?

JSX (JavaScript XML) is an extension to the JavaScript language, which allows you to write HTML-like syntax directly in your JavaScript code. It is not a requirement for writing React applications, but it is a popular choice among developers because it offers a lot of benefits.

## Why JSX was introduced?

JSX was introduced to make it easier to create and manipulate the DOM elements in a React application. Instead of using plain JavaScript to create and manipulate HTML elements, developers can use JSX to write code that is easier to read and maintain.

## Converting from React.createElement to JSX

Let's take a look at the following code that we are already familiar with:

```javascript
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste Everyone"
);
```

Here, we are creating a heading element using `React.createElement()`. We are passing three arguments to this function: the type of element we want to create (`h1`), its attributes (`id: "title"`), and its content (`"Namaste Everyone"`).

Now, let's convert this code into JSX:

```javascript
const heading = <h1>Namaste Everyone</h1>;
```

As you can see, writing JSX is very simple and allows us to write HTML-like syntax directly in our JavaScript code.

Remark: JSX is not HTML inside JavaScript, it is HTML-like syntax.

## The Magic Behind JSX

Under the hood, JSX is converted into calls to `React.createElement()` by a tool called Babel. When you write JSX code, Babel compiles it into plain JavaScript that can be understood by the browser.

Here's what happens behind the scenes when we write JSX:

JSX => Babel => React.createElement() => Object => HTML(DOM)

In other words, Babel compiles JSX into calls to `React.createElement()`, which returns an object that represents the DOM element. This object is then converted into HTML and rendered in the browser.

## Advantages of JSX

JSX offers several advantages over plain JavaScript for creating and manipulating DOM elements:

1. **Readability**: JSX code is much easier to read than plain JavaScript, especially when dealing with complex DOM structures.

2. **Syntactical Sugar**: JSX is a syntactical sugar over `React.createElement()`, which makes it easier to write and understand code.

3. **Less Code**: JSX allows you to write less code than plain JavaScript, which can save time and reduce the chances of making errors.

4. **Developer Experience**: JSX provides a better developer experience by allowing developers to write code that is more familiar to them.

5. **Maintainability**: JSX code is easier to maintain than plain JavaScript, as it is more declarative and easier to read and understand.

In summary, JSX is a powerful tool that allows developers to write HTML-like syntax directly in their JavaScript code, making it easier to create and manipulate DOM elements in React applications.

<br>

## React Components

In React, everything is a component - from simple UI elements like buttons and forms to entire pages and applications. Components are reusable, modular pieces of code that can be easily combined to build complex UIs.

There are two types of React components - functional and class-based components. Functional components are simply JavaScript functions that return JSX code. They are the newer and more preferred way of writing React components.

An example of a functional component is:

```jsx
const HeadingComponent = () => {
  return <h1>Namaste Everyone</h1>;
};
```

This component simply returns an `h1` element with the text "Namaste Everyone".

Functional components can be easily composed to build more complex UIs. For example, we can define another functional component called `Heading2`:

```jsx
const Heading2 = () => {
  return <h2>This is second functional component</h2>;
};
```

We can then use `Heading2` inside `HeadingComponent`:

```jsx
const HeadingComponent = () => {
  return (
    <>
      <h1>Namaste Everyone</h1>
      <Heading2 />
    </>
  );
};
```

This code renders both the `h1` element and the `Heading2` component.

We can also use a functional component inside another functional component by calling it as a function. For example:

```jsx
const Heading = () => {
  return <h3>Hi from Heading!</h3>;
};

const HeadingComponent = () => {
  return (
    <>
      <h1>Namaste Everyone</h1>
      {Heading()}
    </>
  );
};
```

This code also renders both the `h1` element and the `Heading` component.

Finally, component composition is the concept of combining multiple smaller components to create larger and more complex components. It is a fundamental concept in React development and allows for greater reusability and maintainability of code.
