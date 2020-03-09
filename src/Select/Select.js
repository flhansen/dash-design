import React, { useRef, useState } from 'react';
import TextField from '../TextField/TextField';
import { ReactComponent as ArrowDownSvg } from '../Img/arrow_down.svg';
import './Select.scss';

function Select({ value, options = [], leadingIcon, trailingIcon = <ArrowDownSvg />, onTextChange = () => {}, onSelectItem = () => {}, label, ...props }) {

  const optionsContainer = useRef();
  const [text, setText] = useState(value);

  const handleFocus = e => {
    optionsContainer.current.classList.add('visible');
  };

  const handleBlur = e => {
    optionsContainer.current.classList.remove('visible');
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
      <div className="options" ref={optionsContainer}>
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
    </div>
  );

}

export default Select;
