import React, { useState } from 'react';

const WordInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the submission of the input value
        console.log(inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type a word..."
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default WordInput;