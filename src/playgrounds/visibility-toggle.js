class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      heading: "Visibility Toggle"
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      visibility: !this.state.visibility
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.heading}</h1>
        {this.state.visibility && <p>This is the secret info</p>}
        <button onClick={this.handleToggle}>
          {this.state.visibility === true ? "Hide details" : "Show details"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
