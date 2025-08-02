import React from 'react';

const Time = ({ label, key, required }) => (
	<div className="form-field">
		<label htmlFor={key}>{label}</label>
		<input type="time" id={key} name={key} required={required} />
	</div>
);

export default Time;
