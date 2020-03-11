import React from 'react';
import './SvgButton.scss';

function SvgButton({ img: Image, size, fill, disabled, ...props }) {

  return (
    <button className="svg-button" {...props} disabled={disabled}>
      <Image style={{ fill: fill, opacity: (!disabled ? 1.0 : 0.3) }} />
    </button>
  );

}

export default SvgButton;
