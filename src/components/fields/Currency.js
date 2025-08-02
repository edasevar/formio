import React from 'react';

const Currency = ({ label, key, placeholder, required }) => (
	<div className="form-field">
		<label htmlFor={key}>{label}</label>
		<input
			type="number"
			id={key}
			name={key}
			step="0.01"
			placeholder={placeholder}
			required={required}
		/>
	</div>
);

export default Currency;
