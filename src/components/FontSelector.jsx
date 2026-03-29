import React from 'react';

const FontSelector = ({ fonts, onFontChange }) => {
  return (
    <div className="font-selector">
      <h3>Select a Font:</h3>
      <ul>
        {fonts.map((font, index) => (
          <li key={index} style={{ fontFamily: font, fontWeight: 'bold', outline: '1px solid black' }} onClick={() => onFontChange(font)}>
            {font}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FontSelector;