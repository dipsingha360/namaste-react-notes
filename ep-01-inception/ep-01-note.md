# Episode 01 - Inception

This is the starting of this course and my react note also. In this note i'm try to write about what I learn from this course, in every episode.

## Creating a "Hello World" Heading

First things first, let's create a simple heading with "Hello World" text. Since you probably already know HTML, here's the code:

```html
<div id="root">
  <h1>Hello World</h1>
</div>
```

But let's do it using JavaScript for practice:

```javascript
const root = document.querySelector("#root");
const heading = document.createElement("h1");
heading.textContent = "Hello World";
root.appendChild(heading);
```

## Understanding CDNs

A website/webapp hosted in several location based on geographic locations, This website/webapp maintain one database but it has multiple coppies of this website/webapp stored in temporary storage on several locations data center, and finally user get tho respose quickly through their nearest datacenter, this process called Content Delivery Networks (CDNs).
In this case we use react CDN which include the necessary scripts for writting react project codes. In most cases, you'll see a `crossorigin` attribute in the CDN links, which tells the browser to allow loading of scripts even if they are hosted on another domain.

## Setting up React

Now that we have a basic understanding of CDNs, let's set up React in our project. We'll start by copying the CDN links from the React documentation and pasting them in the `body` section of our HTML file.

Once we have the necessary scripts, we can start writing React code. To create the same "Hello World" heading using React, we can use the `createElement` API provided by React:

```javascript
const heading = React.createElement("h1", { id: "heading" }, "Hello world");

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);
```

## Conclusion

And that's it for day 1 of my React journey! We learned how to create a simple heading using JavaScript, the basics of CDNs, and how to set up React by CDN in our project.
