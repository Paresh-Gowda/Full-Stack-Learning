import React from "react";
import ReactDOM from "react-dom";
const name="Paresh R";
const year=2026;
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright: {year}</p>
  </div>,
  document.getElementById("root")
);