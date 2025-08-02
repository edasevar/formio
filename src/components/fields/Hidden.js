import React from 'react';

const Hidden = ({ key, defaultValue }) => (
	<input type="hidden" name={key} value={defaultValue || ''} />
);

export default Hidden;
