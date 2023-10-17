import React, { useState } from "react";
import Display from "./Components/Display";

function Button(props) {
  return <button onClick={props.onClick}>{props.ButtonName}</button>;
}

function App() {
  const [counter, setCounter] = useState(0);

  function handlePlusClick() {
    setCounter(counter + 1);
  }

  function handleMinusClick() {
    setCounter(counter - 1);
  }

  function handleZeroClick() {
    setCounter(0);
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={handlePlusClick} ButtonName="plus" />
      <Button onClick={handleMinusClick} ButtonName="minus" />
      <Button onClick={handleZeroClick} ButtonName="zero" />
    </div>
  );
}

export default App;
/*

Button tag like this :

<Button onClick={handlePlusClick} ButtonName="plus" />
<Button onClick={handleMinusClick} ButtonName="minus" />
<Button onClick={handleZeroClick} ButtonName="zero" />

Button.jsx file return funtion :

function Button(props) {
    return <button onClick={props.onClick}>{props.ButtonName}</button>;
  }
*/
