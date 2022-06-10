import { evaluate } from "mathjs"
import { useState } from 'react';
import './App.css';
import Numbers from './components/Numbers';
import Operators from './components/Operators';

function App() {

  const [input, setInput]= useState("")

  const calculate=(button) =>{
    if (button === "="){
      const result = evaluate(input)
      setInput(result)
    } else if (button==="c"){
      setInput("")
    }else{
      setInput(input + button)
    };
  };

  const handleClick= (e) => {
    const display = e.target.textContent 
    calculate(display)
  }

  return (
    <div className="box">
      <h1>calculator</h1>
      <h2 class="result" data-testid="display">{input || "0"}</h2>
      <div class="buttonBox">
      <Operators class="op" handleClick={handleClick} />
      <Numbers class="num" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
