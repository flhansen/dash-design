import React, { useRef, useState } from 'react';
import TextField from '../TextField/TextField';
import { ReactComponent as ArrowDownSvg } from '../Img/arrow_down.svg';
import './Select.scss';

function Select({ value = '', options = [], actions, leadingIcon, trailingIcon = <ArrowDownSvg />, onTextChange = () => {}, onSelectItem = () => {}, label, ...props }) {

  const popupRef = useRef();
  const [text, setText] = useState(value);

  const handleFocus = e => {
    popupRef.current.classList.add('visible');
  };

  const handleBlur = e => {
    popupRef.current.classList.remove('visible');
  };

  const handleItemClick = option => {
    onSelectItem(option);
    onTextChange(option.name);
    setText(option.name);
  };

  const handleTextChange = text => {
    onTextChange(text);
    setText(text);
  }

  const filter = option => {
    return option.name.toUpperCase().includes(text.toUpperCase());
  };

  return (
    <div className="select" {...props}>
      <TextField value={text} leadingIcon={leadingIcon} trailingIcon={trailingIcon} style={{ width: '100%' }} label={label} onFocus={handleFocus} onBlur={handleBlur} onTextChange={handleTextChange} />
      <div className="select__popup" ref={popupRef}>
        <div className="select__popup-options">
          {
            options
              .filter(filter)
              .map((option, idx) => (
                <div
                  className="option"
                  key={idx}
                  onMouseDown={() => handleItemClick(option)}>
                  {option.name}
                </div>
              ))
          }
        </div>
        { actions ?
          <div className="select__popup-actions">
            {actions}
          </div>
        : null }
      </div>
    </div>
  );

}

export default Select;
