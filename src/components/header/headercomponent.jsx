import React from "react";
import "../images/marvel.jpg";
import "../css/style.css";
export const HeaderComponent = (props) => {
  return (
    <header>
      <img
        className="image-main"
        src={require("../images/marvel.jpg")}
        alt="marvel"
      />
      <h1>Lorem ipsum dolor sit</h1>
    </header>
  );
};
