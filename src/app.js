import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/normalize.css/normalize.css";
import "./styles/styles.scss";

import IndecisionApp from "./components/IndecisionApp";

const appRoot = document.getElementById("app");

ReactDOM.render(<IndecisionApp />, appRoot);
