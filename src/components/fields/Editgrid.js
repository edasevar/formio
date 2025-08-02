import React, { useState } from 'react';
import RenderComponents from '../RenderComponents';

const Editgrid = ({ key, label, components = [] }) => {
	const [rows, setRows] = useState([{}]);

	const addRow = () => {
		setRows([...rows, {}]);
	};

	return (
		<div className="form-editgrid">
			<label>{label}</label>
			{rows.map((row, idx) => (
				<div key={idx} className="editgrid-row">
					<RenderComponents components={components} />
				</div>
			))}
			<button type="button" onClick={addRow}>Add Row</button>
		</div>
	);
};

export default Editgrid;
