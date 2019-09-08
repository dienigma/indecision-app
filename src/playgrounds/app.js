class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      subtitle: "A fuzzy To-Do"
    };
    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("Saving Data");
    }
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);

    alert(this.state.options[randomNum]);
  }

  handleRemoveAll() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionText) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionText != option)
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return `Enter proper value to add Option`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option already exists.`;
    } else {
      this.setState(() => ({ options: this.state.options.concat(option) }));
    }
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What Should I do
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option.</p>}
      {props.options.map(option => {
        return (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        );
      })}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button onClick={e => props.handleDeleteOption(props.optionText)}>
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp />, appRoot);
