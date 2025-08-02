import React from 'react';

const Address = ({ key, label, required }) => (
	<div className="form-address">
		<label>{label}</label>
		<input type="text" name={`${key}_street`} placeholder="Street" required={required} />
		<input type="text" name={`${key}_city`} placeholder="City" required={required} />
		<input type="text" name={`${key}_state`} placeholder="State" required={required} />
		<input type="text" name={`${key}_zip`} placeholder="ZIP Code" required={required} />
	</div>
);

export default Address;
