import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  function handleClickMinus() {
    setCounter(counter - 1);
  }
  function handleClickZero() {
    setCounter(0);
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>plus</button>
      <button onClick={handleClickMinus}>minus</button>
      <button onClick={handleClickZero}>Zero</button>
    </div>
  );
}

export default App;
