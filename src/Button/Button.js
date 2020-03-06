import React from 'react';
import Typography from '../Typography/Typography';
import './Button.scss';

function Button({ text, type = 'filled', ...props }) {

  return (
    <button className={type} {...props}>
      <Typography type='button'>{text}</Typography>
    </button>
  );

}

export default Button;
