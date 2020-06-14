import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import HelpIcon from '@material-ui/icons/Help';
import { get } from 'modules/api';

const statusIconStyle = `
&& {
	font-size: 1rem;
	margin-right: 5px;
}`;

const SCircularProgress = styled(CircularProgress)`
	${statusIconStyle}
`;

const SCheckCircleIcon = styled(CheckCircleIcon)`
	color: ${({ theme }) => theme.palette.success.main};
	${statusIconStyle}
`;

const SErrorIcon = styled(ErrorIcon)`
	color: ${({ theme }) => theme.palette.error.main};
	${statusIconStyle}
`;

const SHelpIcon = styled(HelpIcon)`
	color: ${({ theme }) => theme.palette.grey['600']};
	${statusIconStyle}
`;

const HostMonitoringCheck = ({ hostname }) => {
	const [deviceStatus, setDeviceStatus] = useState('loading');

	useEffect(() => {
		// fetch monitoring status
		get(`/devices/monitoring/${hostname}`)
			.then((data) => {
				setDeviceStatus(data.status);
			})
			.catch(() => setDeviceStatus('unknown'));
	}, [hostname]);

	const renderIcon = (status) => {
		switch (status) {
			case 'loading':
				return <SCircularProgress size={12} />;
			case 'up':
				return <SCheckCircleIcon />;
			case 'down':
				return <SErrorIcon />;
			default:
				return <SHelpIcon />;
		}
	};

	return (
		<Tooltip title={`Host is ${deviceStatus}`}>
			{renderIcon(deviceStatus)}
		</Tooltip>
	);
};

HostMonitoringCheck.propTypes = {
	hostname: PropTypes.string.isRequired,
};

export default HostMonitoringCheck;
