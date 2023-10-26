import React, { useState } from "react";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/Button.css";

function App() {
  const [states, setStates] = useState(Array(9).fill(null));
  const [XIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    if (states[i] || calculateWinner(states)) {
      return;
    }
    const nextSquares = states.slice();
    if (XIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "o";
    }

    setStates(nextSquares);
    setXIsNext(!XIsNext);
  };
  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (states[a] && states[a] == states[b] && states[b] == states[c]) {
        return states[a];
      }
    }
    return null;
  };
  let winner = calculateWinner();
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next player : " + (XIsNext ? "X" : "O");
  }
  return (
    <div>
      <br></br>
      <div className="text-center">{status}</div>
      <br></br>
      <div className="text-center button-row">
        <Button value={states[0]} onClick={() => handleClick(0)} />
        <Button value={states[1]} onClick={() => handleClick(1)} />
        <Button value={states[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="text-center button-row">
        <Button value={states[3]} onClick={() => handleClick(3)} />
        <Button value={states[4]} onClick={() => handleClick(4)} />
        <Button value={states[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="text-center button-row">
        <Button value={states[6]} onClick={() => handleClick(6)} />
        <Button value={states[7]} onClick={() => handleClick(7)} />
        <Button value={states[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default App;
