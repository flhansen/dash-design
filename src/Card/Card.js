import React from 'react';
import Typography from '../Typography/Typography';
import './Card.scss'

function Card({ title, subtitle, ...props }) {

  return (
    <div className="card" {...props}>
      { title ?
        <div className="card__titlebar">
          <div className="card__titlebar-title">
            <Typography type='heading'>{title}</Typography>
          </div>

          { subtitle ?
            <div className="card__titlebar-subtitle">
              <Typography type='secondary'>{subtitle}</Typography>
            </div>
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
