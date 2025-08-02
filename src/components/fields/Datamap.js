import React, { useState } from 'react';

const Datamap = ({ label, key, required }) => {
	const [rows, setRows] = useState([{ key: '', value: '' }]);

	const handleChange = (index, field, value) => {
		const updated = [...rows];
		updated[index][field] = value;
		setRows(updated);
	};

	const addRow = () => {
		setRows([...rows, { key: '', value: '' }]);
	};

	return (
		<div className="form-datamap">
			<label>{label}</label>
			{rows.map((row, idx) => (
				<div key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
					<input
						type="text"
						name={`${key}[${idx}].key`}
						placeholder="Key"
						value={row.key}
						required={required}
						onChange={(e) => handleChange(idx, 'key', e.target.value)}
					/>
					<input
						type="text"
						name={`${key}[${idx}].value`}
						placeholder="Value"
						value={row.value}
						required={required}
						onChange={(e) => handleChange(idx, 'value', e.target.value)}
					/>
				</div>
			))}
			<button type="button" onClick={addRow}>
				+ Add Key-Value
			</button>
		</div>
	);
};

export default Datamap;
