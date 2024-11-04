import React, { useState } from 'react';
import './App.css';

function App() {
  // State to keep track of the counter value
  const [count, setCount] = useState(0);

  // Functions to handle increment, decrement, and reset
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
