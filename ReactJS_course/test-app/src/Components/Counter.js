import React, { useEffect } from "react";
import { useState } from "react";

import "../Counter.css";
export default function Counter() {
  let count = 0;
  useEffect(() => {
    window.alert("Welcome to the counter page");
  });
  const [currentState, setCurrentState] = useState(count);
  const handleClick = () => {
    setCurrentState(currentState + 1);
  };
  return (
    <div className="counter-parent">
      <div className="main-counter">
        <h3>Counter</h3>
        <button onClick={handleClick}>{currentState}</button>
      </div>
    </div>
  );
}
