const appRoot = document.getElementById("app");

const handleVisibility = () => {
  visibility = !visibility;
  render();
};

let visibility = false;

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      {visibility && <p>This is the secret info</p>}
      <button onClick={handleVisibility}>
        {visibility === true ? "Hide details" : "Show details"}
      </button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
