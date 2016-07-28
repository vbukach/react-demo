import React from 'react';

import Tabs from './Tabs.jsx';

const tabs = [
				{ id: 'tab-name', title: 'Tab Name', content: 'Hello' },
				{ id: 'tab-name2', title: 'Tab Name2', content: 'World' }
			];

const TabsPage = () => {
	return (
		<div className="jumbotron">
			<h4>This is tabs page</h4>
			<Tabs tabs={tabs} selectedTab="tab-name2" id="id1"></Tabs>
			<Tabs tabs={tabs} selectedTab="tab-name2" id="id2"></Tabs>
		</div>
	);
};

export default TabsPage;