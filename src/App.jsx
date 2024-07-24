import "react"
import {useState} from "react"
import './App.css';


function App() {
 /* buttons, a function to calculate, clear, delete, how can i use the useState hook in this context*/

 const[input, setInput] = useState("");
 const[result, setResult] = useState("");

  function calculate () {
    try {
      setInput(eval(input))
    }
    catch(error) {
      setResult(' error')
    }
  }
  function clear () { 
    setInput("")
    setResult("")

  }



function handleSubmit (value) {
    setInput(input + value)
}

  return (
  <div className="container">

    <div className="display"> 
      <input type="text" value = {input} readOnly />
        <div>{result}</div>

    </div>
    <div className="buttons"> 

      <button onClick = {() => handleSubmit('1')}>1</button>
      <button onClick = {() => handleSubmit('2')}>2</button>
      <button onClick = {() => handleSubmit('3')}>3</button>
      <button onClick = {() => handleSubmit('+')}>+</button>
      <button onClick = {() => handleSubmit('4')}>4</button>
      <button onClick = {() => handleSubmit('5')}>5</button>
      <button onClick = {() => handleSubmit('6')}>6</button>
      <button onClick = {() => handleSubmit('-')}>-</button>
      <button onClick = {() => handleSubmit('7')}>7</button>
      <button onClick = {() => handleSubmit('8')}>8</button>
      <button onClick = {() => handleSubmit('9')}>9</button>
      <button onClick = {() => handleSubmit('/')}>/</button>
      <button onClick = {() => handleSubmit('*')}>*</button>
      
      <button onClick = {calculate}>=</button>
      <button onClick = {clear}>C</button>            
    </div>
  </div>
    






  )
}

export default App
