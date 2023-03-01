import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header1";
import "./index.css";
import User from "./User";
import { BrowserRouter } from "react-router-dom";
const main = {
  background: "green",
  height: "100vh",
  width: "100wh",
};
const firstVariable = "expert";
const secondVariable = "developer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={main}>
    <h1 style={{ color: "pink" }}>
      Hello world {firstVariable + " " + secondVariable}
    </h1>
    {/* components */}
    <Header />
    <Header />
    <Header />
    <User name="Johndd" expertise="Frontend" />
    <User name="Pauline" expertise="Backend" />
    <br></br>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
