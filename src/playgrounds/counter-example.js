class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const json = localStorage.getItem("count");
    const count = JSON.parse(json);

    if (count) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate() {
    const json = JSON.stringify(this.state.count);
    console.log(json);
    localStorage.setItem("count", json);
  }

  handleAddOne() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleMinusOne() {
    this.setState({
      count: this.state.count - 1
    });
  }

  handleReset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
