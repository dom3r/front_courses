import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div>
      Home
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
