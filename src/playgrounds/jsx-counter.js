let count = 0;

const addOne = () => {
  count++;
  renderTemplate();
};

const minusOne = () => {
  count--;
  renderTemplate();
};

const reset = () => {
  count = 0;
  renderTemplate();
};

const appRoot = document.getElementById("app");

const renderTemplate = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderTemplate();
