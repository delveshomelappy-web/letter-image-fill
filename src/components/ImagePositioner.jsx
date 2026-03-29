import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const ImagePositioner = ({ imageSrc, letterOutline }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });

  const handleDragStop = (e, d) => {
    setPosition({ x: d.x, y: d.y });
  };

  const handleResize = (e, direction, ref, delta, position) => {
    setSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight
    });
    setPosition({ x: position.x, y: position.y });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img src={letterOutline} alt="letter outline" style={{ position: 'absolute', width: '100%', height: '100%' }} />
      <Rnd
        position={position}
        size={size}
        onDragStop={handleDragStop}
        onResize={handleResize}
        style={{ zIndex: 1 }}
      >
        <img src={imageSrc} alt="content" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Rnd>
    </div>
  );
};

export default ImagePositioner;
