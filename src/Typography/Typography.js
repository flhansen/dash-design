import React from 'react';
import './Typography.scss';

function Typography({ type, ...props }) {

  return (
    <div className="typography">
      <p className={type ? type : null}>{props.children}</p>
    </div>
  );

}

export default Typography;
