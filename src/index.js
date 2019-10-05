import React from "react";
import ReactDOM from "react-dom";
import './style.css';

const Index = () => {
  return <div className="helloworld">Hello React</div>;
};

ReactDOM.render(<Index />, document.querySelector("#root"));