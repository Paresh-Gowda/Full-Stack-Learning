import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" style={{ color: "blue" }}>
      My Favourite Foods
    </h1>
    <img alt="random" src={img + "?grayscale"} />
    <img
      alt="biriyani"
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcC4smyptgJjzUe6vDLmTDIDSFc_AH5PxakGCCqha56Q&s=10"
    ></img>
    <img
      alt="prawns"
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQ17fA6U6MSLMc_5FUiVaFw_qKJInDhRnnGab6uzS8Q&s=10"
    ></img>
  </div>,
  document.getElementById("root"),
);