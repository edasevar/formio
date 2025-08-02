import React from 'react';
import RenderComponents from '../RenderComponents';

const Fieldset = ({ label, components = [] }) => (
	<fieldset className="form-fieldset">
		<legend>{label}</legend>
		<RenderComponents components={components} />
	</fieldset>
);

export default Fieldset;
