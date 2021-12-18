import React from 'react';

const Input = ({ label, name, defaultValue, type, required }) => {
  return (
    <label htmlFor={name} className='flex flex-col my-3'>
      <span>{label}</span>
      <input
        required={required}
        type={type}
        name={name}
        className='input'
        defaultValue={defaultValue}
        data-testid='input-test'
      />
    </label>
  );
};

export default Input;
