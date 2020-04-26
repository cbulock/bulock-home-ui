import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeviceRow from './DeviceRow';

const CategoryDisplay = ({
	category,
	devices,
	setEditDeviceData,
	setModifyDeviceDialogOpen,
}) => (
	<>
		<TableRow key={category.id}>
			<TableCell variant="head" colspan="100%">
				{category.name}
			</TableCell>
		</TableRow>

		{devices
			.filter((device) => device.category.id === category.id)
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
