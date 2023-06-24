import './styles.scss';
import React from 'react';

type TextInputProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
};

const TextInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  ...props
}: TextInputProps): JSX.Element => {
  return (
    <div className="_wrapper_input">
      <label htmlFor={id} className="_label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="_input"
        {...props}
      />
    </div>
  );
};

export default TextInput;
