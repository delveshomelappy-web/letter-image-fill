import React from 'react';
import PropTypes from 'prop-types';

const SVGLetterRenderer = ({ letter, fillColor, strokeColor, strokeWidth, maskImage }) => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <defs>
        {maskImage && (
          <mask id="letter-mask">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <image href={maskImage} width="100" height="100" />
          </mask>
        )}
      </defs>
      <text
        x="50"
        y="50"
        dy=".35em"
        textAnchor="middle"
        style={{
          fill: fillColor,
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          mask: maskImage ? 'url(#letter-mask)' : 'none'
        }}
        fontSize="60"
        fontWeight="bold"
      >
        {letter}
      </text>
    </svg>
  );
};

SVGLetterRenderer.propTypes = {
  letter: PropTypes.string.isRequired,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  maskImage: PropTypes.string
};

SVGLetterRenderer.defaultProps = {
  fillColor: 'black',
  strokeColor: 'none',
  strokeWidth: 1,
  maskImage: null
};

export default SVGLetterRenderer;