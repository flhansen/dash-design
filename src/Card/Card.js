import React from 'react';
import Typography from '../Typography/Typography';
import './Card.scss'

function Card({ title, subtitle, ...props }) {

  return (
    <div className="card" {...props}>
      { title ?
        <div className="card__title">
          <Typography type='heading'>{title}</Typography>

          { subtitle ?
            <Typography type='secondary'>{subtitle}</Typography>
          : null }
        </div>
      : null }
      <div className="card__content">
        {props.children}
      </div>
    </div>
  );

}

export default Card;
