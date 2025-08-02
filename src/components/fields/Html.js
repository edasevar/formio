import React from 'react';

const Html = ({ content }) => (
	<div className="form-html" dangerouslySetInnerHTML={{ __html: content }} />
);

export default Html;
