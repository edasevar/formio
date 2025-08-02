import React from 'react';

const Select = ({ label, key, options = [], required }) => (
  <div className="form-field">
    <label htmlFor={key}>{label}</label>
    <select id={key} name={key} required={required}>
      <option value="">-- Select --</option>
      {options?.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default Select;
