// canvasUtils.js

/**
 * A set of canvas utility functions for image masking, rendering, and export.
 */

/**
 * Applies a mask to an image on a canvas.
 * @param {HTMLCanvasElement} canvas - The canvas to which the mask will be applied.
 * @param {HTMLImageElement} image - The image to be masked.
 * @param {HTMLImageElement} mask - The mask image.
 */
function applyMask(canvas, image, mask) {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    ctx.globalCompositeOperation = 'destination-in';
    ctx.drawImage(mask, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
}

/**
 * Renders an image onto the canvas.
 * @param {HTMLCanvasElement} canvas - The canvas to render on.
 * @param {HTMLImageElement} image - The image to render.
 * @param {number} x - The x-coordinate.
 * @param {number} y - The y-coordinate.
 */
function renderImage(canvas, image, x, y) {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, x, y);
}

/**
 * Exports the canvas content to an image file.
 * @param {HTMLCanvasElement} canvas - The canvas to export.
 * @param {string} format - The format to export the image (e.g., 'png', 'jpeg').
 * @param {number} quality - Quality of the exported image (0 to 1).
 * @returns {string} - The data URL of the exported image.
 */
function exportCanvas(canvas, format = 'png', quality = 1.0) {
    return canvas.toDataURL(`image/${format}`, quality);
}

// Export the functions
export { applyMask, renderImage, exportCanvas };