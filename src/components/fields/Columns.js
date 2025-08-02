import React from 'react';
import RenderComponents from '../RenderComponents';

const Columns = ({ columns = [] }) => (
	<div className="form-columns" style={{ display: 'flex', gap: '1rem' }}>
		{columns.map((col, idx) => (
			<div key={idx} style={{ flex: 1 }}>
				<RenderComponents components={col.components || []} />
			</div>
		))}
	</div>
);

export default Columns;
