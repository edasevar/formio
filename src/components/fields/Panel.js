import React from 'react';
import RenderComponents from '../RenderComponents';

const Panel = ({ label, components = [] }) => (
	<div className="form-panel">
		<h3>{label}</h3>
		<RenderComponents components={components} />
	</div>
);

export default Panel;
