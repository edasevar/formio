import React from 'react';

const Radio = ({ label, key, options = [], required }) => (
  <div className="form-field">
    <label>{label}</label>
    {options?.map((opt, idx) => (
      <label key={idx}>
        <input type="radio" name={key} value={opt} required={required} />
        {opt}
      </label>
    ))}
  </div>
);

export default Radio;
