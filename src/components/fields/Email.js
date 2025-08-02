import React from 'react';

const Email = ({ label, key, placeholder, required }) => (
  <div className="form-field">
    <label htmlFor={key}>{label}</label>
    <input type="email" id={key} name={key} placeholder={placeholder} required={required} />
  </div>
);

export default Email;
