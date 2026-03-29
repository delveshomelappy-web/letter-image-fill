import React, { useState } from 'react';
import { renderLettersOnCanvas } from './utils';

const App = () => {
  const [word, setWord] = useState('');
  const [font, setFont] = useState('Arial');

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleRender = () => {
    renderLettersOnCanvas(word, font);
  };

  return (
    <div>
      <h1>Letter Image Fill</h1>
      <input 
        type="text" 
        value={word} 
        onChange={handleWordChange} 
        placeholder="Enter your word here" 
      />
      <select value={font} onChange={handleFontChange}>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
      </select>
      <button onClick={handleRender}>Render</button>
      <canvas id="canvas" width="800" height="400"></canvas>
    </div>
  );
};

export default App;
