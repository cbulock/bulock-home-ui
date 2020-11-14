import React from 'react';
import Box from '@material-ui/core/Box';
import NavLink from './NavLink';
import config from './navConfig.json';

export default () => (
	<Box display="flex">
		{config.map((navItem) => (
			<NavLink url={navItem.url} title={navItem.title} />
		))}
	</Box>
);
