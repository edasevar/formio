import React from 'react';
import RenderComponents from '../RenderComponents';

const Container = ({ key, label, components = [] }) => (
	<div className="form-container">
		<label>{label}</label>
		<RenderComponents components={components} />
	</div>
);

export default Container;
