import React from 'react';

const Selectboxes = ({ label, key, options = [] }) => (
  <div className="form-field">
    <label>{label}</label>
    {options?.map((opt, idx) => (
      <label key={idx}>
        <input type="checkbox" name={`${key}[${opt}]`} />
        {opt}
      </label>
    ))}
  </div>
);

export default Selectboxes;
