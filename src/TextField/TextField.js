import React, { useState, useEffect } from 'react';
import Typography from '../Typography/Typography';
import './TextField.scss';

function TextField({ leadingIcon, type = 'text', trailingIcon, label, value = '', onTextChange = () => {}, onFocus = () => {}, onBlur = () => {}, ...props }) {

  const [textValue, setTextValue] = useState(value);

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  const handleTextValueChange = e => {
    setTextValue(e.target.value);
    onTextChange(e.target.value);
  };

  const handleFocus = e => {
    onFocus(e);
  };

  const handleBlur = e => {
    onBlur(e);
  };

  return (
    <div className={ 'textfield' + (trailingIcon ? ' trailing' : '') + (leadingIcon ? ' leading' : '') } {...props}>

      { label ?
        <Typography type='body2'>
          {label}
        </Typography>
      : null }

      <div className='input'>
        <input
          type={type}
          value={textValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleTextValueChange} />

        { leadingIcon ?
          <div className="leading-icon">
            { leadingIcon }
          </div>
        : null }

        { trailingIcon ?
          <div className="trailing-icon">
            { trailingIcon }
          </div>
        : null }
      </div>
    </div>
  );

}

export default TextField;
