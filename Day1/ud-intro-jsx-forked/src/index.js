import React from "react";
import ReactDOM from "react-dom";

const name = "Shahrukh Ahmad";
const number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>My lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
