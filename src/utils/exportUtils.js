export function downloadImageAsPNG(imageElement) {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match the image
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;

    // Draw the image onto the canvas
    ctx.drawImage(imageElement, 0, 0);

    // Convert the canvas to a PNG data URL
    const dataURL = canvas.toDataURL('image/png');

    // Create a link to download the image
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'rendered-image.png';

    // Trigger the download by simulating a click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}