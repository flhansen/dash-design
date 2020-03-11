import React from 'react';
import './SvgButton.scss';

function SvgButton({ img: Image, size, fill, ...props }) {

  return (
    <button className="svg-button" {...props}>
      <Image style={{ fill: fill }} />
    </button>
  );

}

export default SvgButton;
