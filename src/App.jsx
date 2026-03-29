import React, { useState } from 'react';
import LetterCanvas from './LetterCanvas';

const App = () => {
    const [word, setWord] = useState('');
    const [font, setFont] = useState('');
    const [image, setImage] = useState(null);

    const handleWordChange = (e) => setWord(e.target.value);
    const handleFontChange = (e) => setFont(e.target.value);
    const handleImageUpload = (e) => setImage(URL.createObjectURL(e.target.files[0]));

    return (
        <div className="app">
            <h1>Letter Image Fill</h1>
            <input type="text" value={word} onChange={handleWordChange} placeholder="Enter your word" />
            <select value={font} onChange={handleFontChange}>
                <option value="">Select Font</option>
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Times New Roman">Times New Roman</option>
                {/* Add more fonts as needed */}
            </select>
            <input type="file" onChange={handleImageUpload} />
            <LetterCanvas word={word} font={font} image={image} />
            {/* Include tools for drag/resize functionality and export capabilities here */}
        </div>
    );
};

export default App;