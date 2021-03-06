import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VlanBadge from 'components/common/VlanBadge';
import HostMonitoringCheck from './HostMonitoringCheck';
import HostnameDnsCheck from './HostnameDnsCheck';

const SEditCell = styled(TableCell)`
	max-width: 1em;
`;

const SEditButton = styled(IconButton)`
	float: right;
`;

const DeviceRow = ({
	device,
	devices,
	setEditDeviceData,
	setModifyDeviceDialogOpen,
}) => {
	const handleEdit = (id) => {
		const editingDevice = devices.find((d) => id === d.id);
		setEditDeviceData(editingDevice);
		setModifyDeviceDialogOpen(true);
	};
	return (
		<TableRow key={device.id}>
			<TableCell>{device.name}</TableCell>
			<TableCell>
				<Grid container alignItems="center">
					{device.hostname && (
						<HostMonitoringCheck hostname={device.hostname} />
					)}
					<HostnameDnsCheck isValid={device.hostnameValid} />
					{device.hostname}
				</Grid>
			</TableCell>
			<TableCell>{device.device_type.display_name}</TableCell>
			<TableCell>
				{device.ip}
				{device.vlan && device.vlan.id && (
					<VlanBadge id={device.vlan.id} name={device.vlan.name} />
				)}
			</TableCell>
			<TableCell>
				<code>{device.mac}</code>
				<Typography variant="caption" display="block">
					{device.oui}
				</Typography>
			</TableCell>
			<SEditCell>
				<SEditButton onClick={() => handleEdit(device.id)}>
					<EditIcon />
				</SEditButton>
			</SEditCell>
		</TableRow>
	);
};

DeviceRow.propTypes = {
	device: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string.isRequired,
		hostname: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		device_type: PropTypes.shape({
			value: PropTypes.string.isRequired,
			display_name: PropTypes.string.isRequired,
		}),
		ip: PropTypes.string.isRequired,
		mac: PropTypes.string.isRequired,
		category: PropTypes.number.isRequired,
		device_category: PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}),
		vlan: PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}),
		hostnameValid: PropTypes.bool,
		oui: PropTypes.string,
	}).isRequired,
	devices: PropTypes.object.isRequired,
	setEditDeviceData: PropTypes.func.isRequired,
	setModifyDeviceDialogOpen: PropTypes.func.isRequired,
};

export default DeviceRow;
