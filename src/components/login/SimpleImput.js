import React from 'react';

const SimpleInput = ({ type, label, name, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        name={name}
        placeholder={label}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default SimpleInput;
