import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    subtitle: "A fuzzy To-Do",
    selectedOption: undefined
  };

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

  handleClearSelectedOption = () => {
    this.setState({
      selectedOption: undefined
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState({
      selectedOption: option
    });
  };

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionText => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionText != option)
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return `Enter proper value to add Option`;
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option already exists.`;
    } else {
      this.setState(() => ({ options: this.state.options.concat(option) }));
    }
  };

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
