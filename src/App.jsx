import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State to store the input and result
  const [input, setInput] = useState(""); // Tracks the current input (numbers + operators)
  const [result, setResult] = useState(""); // Tracks the final result after calculation

  // Function to handle button clicks (number or operator)
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value); // Append the clicked button's value to the existing input
  };

  // Function to calculate the result based on the current input
  const calculate = () => {
    try {
      setResult(eval(input).toString()); // Perform the calculation using eval (be cautious with eval)
    } catch (error) {
      setResult("Error"); // Handle any errors during calculation
    }
  };

  // Function to clear the input and result
  const clearInput = () => {
    setInput(""); // Clear the input state
    setResult(""); // Clear the result state
  };

  return (
    <div className="calculator">
      <h3>Simple Calculator</h3>
      <div className="display">
        {/* Display the current input in the text box */}
        <input
          type="text"
          value={input} 
          readOnly 
        />
       
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={clearInput}>C</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default App;
