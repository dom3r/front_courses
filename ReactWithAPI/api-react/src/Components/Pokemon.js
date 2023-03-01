import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function Pokemon() {
  const [num, setNum] = useState(1);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    async function getData() {
      //   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
      //   const data = await res.json();
      //   console.log(data);
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <div>
      <h1>
        You choose <span>{num}</span> value
      </h1>
      <h1>
        My name is <span>{name}</span>{" "}
      </h1>
      <h1>
        I have <span>{moves}</span> moves
      </h1>
      <select
        name=""
        id=""
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
