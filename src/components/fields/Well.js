import React from 'react';
import RenderComponents from '../RenderComponents';

const Well = ({ label, components = [] }) => (
	<div className="form-well" style={{ border: '1px solid #ccc', padding: '1rem' }}>
		<h4>{label}</h4>
		<RenderComponents components={components} />
	</div>
);

export default Well;
