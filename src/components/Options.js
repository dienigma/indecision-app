import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3>Your options</h3>
      <button className="button button--link" onClick={props.handleRemoveAll}>
        Remove All
      </button>
    </div>
    <div className="widget__message">
      {props.options.length === 0 && <p>Please add an option.</p>}
    </div>
    {props.options.map((option, index) => {
      return (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
          count={index + 1}
        />
      );
    })}
  </div>
);

export default Options;
