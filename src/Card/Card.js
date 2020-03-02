import React from 'react';
import Typography from '../Typography/Typography';
import './Card.scss'

function Card({ title, ...props }) {

  return (
    <div className="card" {...props}>
      { title ?
        <div className="card__title">
          <Typography type='heading'>{title}</Typography>
        </div>
      : null }
      <div className="card__content">
        {props.children}
      </div>
    </div>
  );

}

export default Card;
