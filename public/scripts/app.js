"use strict";

console.log("App.js is running");

// JSX

var app = {
  title: "Indecision App",
  subtitle: "A fuzzy logic todo",
  options: ["one", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "h2",
    null,
    app.subtitle
  ),
  app.options.length !== 0 ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : React.createElement(
    "p",
    null,
    "There are no options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

var count = 0;

var addOne = function addOne() {
  console.log("Add One");
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
