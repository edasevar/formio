import React from 'react';
import { fieldRegistry } from './fields';

const RenderComponents = ({ components }) => {
	return components.map((field, index) => {
		const Field = fieldRegistry[field.type];
		if (!Field) return <div key={index}>Unknown: {field.type}</div>;
		return <Field key={field.key || index} {...field} />;
	});
};

export default RenderComponents;
