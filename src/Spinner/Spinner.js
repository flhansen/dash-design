import React from 'react';
import './Spinner.scss';

function Spinner({ icon: Icon, size = 16, fill = '#000' }) {

  return (
    <div className="spinner">
      <Icon style={{ width: size, height: size, fill: fill }} />
    </div>
  );

}

export default Spinner;
