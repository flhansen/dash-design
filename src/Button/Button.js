import React from 'react';
import Typography from '../Typography/Typography';
import './Button.scss';

function Button({ text, type = 'filled', size = 'medium', ...props }) {

  return (
    <button className={'button ' + type + ' ' + size} {...props}>
      <Typography type='button'>{text}</Typography>
    </button>
  );

}

export default Button;
