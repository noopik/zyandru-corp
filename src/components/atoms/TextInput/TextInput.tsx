'use client';

import './styles.scss';
import React from 'react';

type TextInputProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isError?: boolean;
};

const TextInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  onChange,
  value,
  isError,
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
        className={`_input ${isError && '_field_error'}`}
        onChange={onChange}
        value={value}
        {...props}
      />
      {isError && (
        <span className="_text_error">Please fill in the required field</span>
      )}
    </div>
  );
};

export default TextInput;
