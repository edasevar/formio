import React, { useState } from 'react';
import RenderComponents from '../RenderComponents';

const Tabs = ({ label, components = [] }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className="form-tabs">
			<label>{label}</label>
			<div className="tab-headers">
				{components.map((tab, idx) => (
					<button key={idx} onClick={() => setActiveTab(idx)}>
						{tab.label || `Tab ${idx + 1}`}
					</button>
				))}
			</div>
			<div className="tab-content">
				<RenderComponents components={components[activeTab].components || []} />
			</div>
		</div>
	);
};

export default Tabs;
