import React from 'react';

const Url = ({ label, key, placeholder, required }) => (
  <div className="form-field">
    <label htmlFor={key}>{label}</label>
    <input type="url" id={key} name={key} placeholder={placeholder} required={required} />
  </div>
);

export default Url;
