import React from 'react';

const Checkbox = ({ label, key, required }) => (
  <div className="form-field">
    <label>
      <input type="checkbox" name={key} required={required} />
      {label}
    </label>
  </div>
);

export default Checkbox;
