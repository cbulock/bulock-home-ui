import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

const statusIconStyle = `
&& {
	font-size: 1rem;
	margin-right: 5px;
}`;

const SCheckCircleIcon = styled(CheckCircleIcon)`
	color: ${({ theme }) => theme.palette.success.main};
	${statusIconStyle}
`;

const SErrorIcon = styled(ErrorIcon)`
	color: ${({ theme }) => theme.palette.error.main};
	${statusIconStyle}
`;

const HostnameDnsCheck = ({ isValid }) =>
	isValid !== undefined && (
		<Tooltip
			title={
				isValid
					? 'Hostname properly resolving'
					: 'Hostname not resolving to IP listed'
			}
		>
			{isValid ? <SCheckCircleIcon /> : <SErrorIcon />}
		</Tooltip>
	);

HostnameDnsCheck.propTypes = {
	isValid: PropTypes.bool.isRequired,
};

export default HostnameDnsCheck;
