import React from 'react';
import Box from '@material-ui/core/Box';
import Title from './Title';
import Nav from './Nav';

export default () => (
	<Box
		p={2}
		borderBottom={1}
		display="flex"
		justifyContent="space-between"
		alignItems="center"
	>
		<Title />
		<Nav />
	</Box>
);
