import React from 'react';

const Button = ({ label, key }) => (
  <div className="form-field">
    <button id={key} name={key} type="submit">
      {label}
    </button>
  </div>
);

export default Button;
