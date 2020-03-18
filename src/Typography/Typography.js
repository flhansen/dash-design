import React from 'react';
import './Typography.scss';

function Typography({ type, ...props }) {

  return (
    <div className="typography">
      <span className={'text' + (type ? ' ' + type : '')}>{props.children}</span>
    </div>
  );

}

export default Typography;
