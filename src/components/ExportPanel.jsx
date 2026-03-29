import React from 'react';

const ExportPanel = () => {
    const exportImage = (format) => {
        // Implementation for exporting images in the specified format
        switch(format) {
            case 'png':
                // Export as PNG logic
                break;
            case 'jpeg':
                // Export as JPEG logic
                break;
            case 'svg':
                // Export as SVG logic
                break;
            default:
                console.error('Unsupported format');
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Copied to clipboard');
            })
            .catch(err => {
                console.error('Error copying to clipboard: ', err);
            });
    };

    return (
        <div className="export-panel">
            <h2>Export Options</h2>
            <button onClick={() => exportImage('png')}>Export as PNG</button>
            <button onClick={() => exportImage('jpeg')}>Export as JPEG</button>
            <button onClick={() => exportImage('svg')}>Export as SVG</button>
            <button onClick={() => copyToClipboard('Your text or URL here')}>Copy to Clipboard</button>
        </div>
    );
};

export default ExportPanel;