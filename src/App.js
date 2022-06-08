import { evaluate } from "mathjs"
import { useState } from 'react';
import './App.css';
import Numbers from './components/Numbers';
import Operators from './components/Operators';

function App() {

  const [input, setInput]= useState("")

  const calculate=(button) =>{
    if (button === "="){
      const result= evaluate(input)
      setInput(result)
    } else if (button==="c"){
      setInput("")
    }else{
      setInput(input + button)
    };
  };

  const handleClick= (e)=>{
    const display=e.target.textContent 
    calculate(display)
  }

  return (
    <div class="box">
      <h1 class="result">{input}</h1>
      <Operators handleClick={handleClick} />
      <Numbers handleClick={handleClick} />
    </div>
  );
}

export default App;
