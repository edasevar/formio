import React from 'react';

const Datetime = ({ label, key, required }) => (
  <div className="form-field">
    <label htmlFor={key}>{label}</label>
    <input type="datetime-local" id={key} name={key} required={required} />
  </div>
);

export default Datetime;
