import React from "react";
import "./App.css";

import "./components/css/style.css";
import {
  HeaderComponent,
  Maincomponent,
  Asidecomponent,
} from "./components/index";

export const App = () => {
  return (
    <div className="container">
      <HeaderComponent />
      <Maincomponent />
      <Asidecomponent />
    </div>
  );
};
