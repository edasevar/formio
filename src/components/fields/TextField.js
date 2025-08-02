import React from 'react';

const TextField = ({ label, key, placeholder, required }) => (
  <div className="form-field">
    <label htmlFor={key}>{label}</label>
    <input type="text" id={key} name={key} placeholder={placeholder} required={required} />
  </div>
);

export default TextField;
