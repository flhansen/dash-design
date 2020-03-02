import React from 'react';
import './Chip.scss';

function Chip({ value, label, highlight, ...props }) {

  return (
    <div className={ 'chip' + (highlight ? ' highlight' : '') } {...props}>
      <p className="value">{value}</p>
      <label>{label}</label>
    </div>
  );

}

export default Chip;
