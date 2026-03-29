import React from 'react';

const CanvasRenderer = ({ images, mask }) => {
    const canvasRef = React.useRef(null);

    const draw = (ctx, images, mask) => {
        // Clear the canvas
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Draw each image with mask applied
        images.forEach((image) => {
            const img = new Image();
            img.src = image.url;
            img.onload = () => {
                ctx.drawImage(img, 0, 0);
                // Apply mask
                ctx.globalCompositeOperation = 'destination-in';
                ctx.drawImage(mask, 0, 0);
                ctx.globalCompositeOperation = 'source-over';
            };
        });
    };

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        draw(ctx, images, mask);
    }, [images, mask]);

    return <canvas ref={canvasRef} width={800} height={600} />;
};

export default CanvasRenderer;