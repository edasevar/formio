import React from 'react';

const Phonenumber = ({ label, key, placeholder, required }) => (
	<div className="form-field">
		<label htmlFor={key}>{label}</label>
		<input
			type="tel"
			id={key}
			name={key}
			placeholder={placeholder}
			required={required}
			pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
		/>
		<small>Format: 123-456-7890</small>
	</div>
);

export default Phonenumber;
