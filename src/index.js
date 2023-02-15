import React from "react";
import { render } from "react-dom";
import "@styles/global.sass";
import Home from "./Home";

render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("app")
);
