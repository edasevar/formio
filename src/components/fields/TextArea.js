import React from 'react';

const TextArea = ({ label, key, placeholder, required }) => (
  <div className="form-field">
    <label htmlFor={key}>{label}</label>
    <textarea id={key} name={key} placeholder={placeholder} required={required} />
  </div>
);

export default TextArea;
