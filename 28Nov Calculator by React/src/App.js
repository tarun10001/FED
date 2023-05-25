import './App.css';
import React, { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const updateCalc = (value) => {
    setCalc(calc + value)
  }

  const equalsTo = () => {
    setCalc((eval(calc).toFixed(1)))
  }

  const del = () => {
    setCalc((eval(calc).toFixed(1)))
  }

  const reset = () => {
    setCalc("")
  }

  return (
    <div className="App">

      <div className='operators'>
        <div className='input_screen'>{calc}        </div>

        <div className='gr'>
          <button onClick={() => updateCalc("7")}>7</button>
          <button onClick={() => updateCalc("8")}>8</button>
          <button onClick={() => updateCalc("9")}>9</button>
          <button className='reset' onClick={del}>DEL</button>
          <button onClick={() => updateCalc("4")}>4</button>
          <button onClick={() => updateCalc("5")}>5</button>
          <button onClick={() => updateCalc("6")}>6</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("1")}>1</button>
          <button onClick={() => updateCalc("2")}>2</button>
          <button onClick={() => updateCalc("3")}>3</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>X</button>


        </div>

        <div className="del">
          <button className='reset' onClick={reset}>RESET</button>
          <button className="red" onClick={equalsTo}>=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
