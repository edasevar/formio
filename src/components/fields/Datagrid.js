import React from 'react';
import RenderComponents from '../RenderComponents';

const Datagrid = ({ label, components = [] }) => (
	<div className="form-datagrid">
		<label>{label}</label>
		<RenderComponents components={components} />
	</div>
);

export default Datagrid;
