import React from 'react';

const Number = ({ label, key, placeholder, required }) => (
  <div className="form-field">
    <label htmlFor={key}>{label}</label>
    <input type="number" id={key} name={key} placeholder={placeholder} required={required} />
  </div>
);

export default Number;
