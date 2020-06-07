import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';

const SBadge = styled(Box)`
	display: inline-block;
	color: ${({ theme }) => theme.palette.primary.contrastText};
	background-color: ${({ theme }) => theme.palette.primary.light};
	font-weight: 600;
	margin: 4px;
	padding: 4px;
	border-radius: 8px;
`;

const VlanBadge = ({ id, name }) => {
	return (
		<Tooltip title={name}>
			<SBadge>{id}</SBadge>
		</Tooltip>
	);
};

VlanBadge.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
};

export default VlanBadge;
