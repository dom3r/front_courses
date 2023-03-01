import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import "./Counter.css";
import Test from "./Test";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="main">
      <Header />
      <Counter />
      <div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toggle
        </button>
      </div>
      {toggle && <Test />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
