import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        const evalResult = new Function(`return ${expression}`)();
        setResult(String(evalResult));
      } catch (err) {
        setResult('Error');
      }
    } else {
      setExpression(prev => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly />
      <div className="result">
        {result && <div>{isNaN(result) ? result : Number(result)}</div>}
      </div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
