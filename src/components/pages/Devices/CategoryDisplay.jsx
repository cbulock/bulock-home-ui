import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeviceRow from './DeviceRow';

const SHeaderRow = styled(TableRow)`
	background-color: ${({ theme }) => theme.palette.primary.light};
`;

const SHeaderCell = styled(TableCell)`
	&& {
		color: ${({ theme }) => theme.palette.primary.contrastText};
	}
`;

const CategoryDisplay = ({
	category,
	devices,
	setEditDeviceData,
	setModifyDeviceDialogOpen,
}) => (
	<>
		<SHeaderRow key={category.id}>
			<SHeaderCell variant="head" colSpan="100%">
				{category.name}
			</SHeaderCell>
		</SHeaderRow>

		{devices
			.filter((device) => device.category === category.id)
			.sort((a, b) => {
				if (a.ip < b.ip) {
					return -1;
				}
				if (a.ip > b.ip) {
					return 1;
				}
				return 0;
			})
			.map((device) => (
				<DeviceRow
					key={device.id}
					device={device}
					devices={devices}
					setEditDeviceData={setEditDeviceData}
					setModifyDeviceDialogOpen={setModifyDeviceDialogOpen}
				/>
			))}
	</>
);

CategoryDisplay.propTypes = {
	category: PropTypes.object.isRequired,
	devices: PropTypes.object.isRequired,
	setEditDeviceData: PropTypes.func.isRequired,
	setModifyDeviceDialogOpen: PropTypes.func.isRequired,
};

export default CategoryDisplay;
