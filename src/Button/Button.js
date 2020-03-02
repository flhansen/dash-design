import React from 'react';
import Typography from '../Typography/Typography';
import './Button.scss';

function Button({ text, type = 'filled' }) {

  return (
    <button className={type}>
      <Typography type='button'>{text}</Typography>
    </button>
  );

}

export default Button;
