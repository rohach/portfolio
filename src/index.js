import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="mouseFollower">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--dot-color)",
        }}
        outerStyle={{
          border: "3px solid var(--dot-color)",
        }}
      />
    </div>
    <App />
  </BrowserRouter>
);
