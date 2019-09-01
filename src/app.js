console.log("App.js is running");

// JSX

const app = {
  title: "Indecision App",
  subtitle: "A fuzzy logic todo",
  options: ["one", "Two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    {app.options.length !== 0 ? (
      <p>Here are your options</p>
    ) : (
      <p>There are no options</p>
    )}
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

let count = 0;

const addOne = () => {
  console.log("Add One");
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
