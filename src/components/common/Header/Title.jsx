import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const STitle = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.primary};
;	font-weight: 700;
	font-size: 2.5rem;
	text-transform: uppercase;
`;

const SCaption = styled(Typography)`
	font-size: 1.25rem;
	font-style: italic;
`;

export default () => (
	<Box>
		<Link to="/" underline="none">
			<STitle variant="h1">Classic Shots</STitle>
		</Link>
		<SCaption>Portraiture & Fine Art Photography by Louis Villafranca</SCaption>
	</Box>
);
