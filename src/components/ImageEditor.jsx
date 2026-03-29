import React, { useState, useRef } from 'react';
import './ImageEditor.css';

const ImageEditor = () => {
    const [image, setImage] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [scale, setScale] = useState(1);
    const imageRef = useRef(null);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleDrag = (e) => {
        const rect = imageRef.current.getBoundingClientRect();
        imageRef.current.style.left = `${e.clientX - rect.width / 2}px`;
        imageRef.current.style.top = `${e.clientY - rect.height / 2}px`;
    };

    const handleResize = (e) => {
        const newScale = scale + e.deltaY * -0.01;
        setScale(Math.min(Math.max(0.1, newScale), 4));
    };

    const handleRotate = (angle) => {
        setRotation(rotation + angle);
    };

    return (
        <div className='image-editor'>
            <input type='file' onChange={handleImageChange} />
            {image && (
                <div 
                    className='image-container'
                    onDrag={handleDrag} 
                    draggable>
                    <img 
                        ref={imageRef}
                        src={image} 
                        alt='Editable' 
                        style={{
                            transform: `rotate(${rotation}deg) scale(${scale})`,
                            position: 'absolute'
                        }}
                    />
                    <button onClick={() => handleRotate(90)}>Rotate Right</button>
                    <button onClick={() => handleRotate(-90)}>Rotate Left</button>
                    <button onWheel={handleResize}>Resize</button>
                </div>
            )}
        </div>
    );
};

export default ImageEditor;