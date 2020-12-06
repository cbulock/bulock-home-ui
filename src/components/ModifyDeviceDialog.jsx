import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { get, call } from 'modules/api';
import Dialog from './common/Dialog';

const ModifyDeviceDialog = ({
	open,
	setOpen,
	deviceData,
	setDeviceData,
	deviceCategories,
	deviceTypes,
}) => {
	const saveChanges = () => {
		const data = JSON.stringify({
			id: deviceData.id,
			name: deviceData.name,
			hostname: deviceData.hostname,
			type: deviceData.type,
			ip: deviceData.ip,
			mac: deviceData.mac,
			category: deviceData.category,
		});
		call('/devices', {
			method: deviceData.id ? 'PATCH' : 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: data,
		})
			.then(() => {
				setOpen(false);
			})
			// eslint-disable-next-line no-console
			.catch(console.log);
	};

	const handleMacChange = (e) => {
		const mac = e.target.value;
		setDeviceData({ ...deviceData, mac });
		get(`/utils/oui/${e.target.value}`)
			.then((data) => {
				setDeviceData({
					...deviceData,
					mac,
					oui: data.company,
				});
			})
			// eslint-disable-next-line no-console
			.catch(console.log);
	};

	return (
		<Dialog
			open={open}
			setOpen={setOpen}
			title={deviceData.id ? 'Modify Device' : 'Add Device'}
			buttons={[
				{
					label: deviceData.id ? 'Save' : 'Add',
					onClick: () => saveChanges(),
				},
			]}
		>
			<Box display="flex" flexDirection="column">
				<Box display="flex">
					<Box p={2}>
						<TextField
							label="Name"
							value={deviceData.name}
							onChange={(e) =>
								setDeviceData({ ...deviceData, name: e.target.value })
							}
						/>
					</Box>
					<Box p={2}>
						<TextField
							label="Hostname"
							value={deviceData.hostname}
							onChange={(e) =>
								setDeviceData({ ...deviceData, hostname: e.target.value })
							}
						/>
					</Box>
				</Box>
				<Box display="flex">
					<Box p={2}>
						<TextField
							label="IP"
							value={deviceData.ip}
							onChange={(e) =>
								setDeviceData({ ...deviceData, ip: e.target.value })
							}
						/>
					</Box>
					<Box p={2}>
						<TextField
							label="MAC"
							value={deviceData.mac}
							helperText={deviceData.oui}
							onChange={handleMacChange}
						/>
					</Box>
				</Box>
				<Box display="flex">
					<Box p={2}>
						<FormControl>
							<InputLabel htmlFor="modify-device-type">Type</InputLabel>
							<Select
								value={deviceData.type}
								onChange={(e) =>
									setDeviceData({
										...deviceData,
										type: e.target.value,
									})
								}
								inputProps={{
									name: 'type',
									id: 'modify-device-type',
								}}
							>
								{deviceTypes &&
									deviceTypes.map((deviceType) => (
										<MenuItem key={deviceType.value} value={deviceType.value}>
											{deviceType.display_name}
										</MenuItem>
									))}
							</Select>
						</FormControl>
					</Box>
					<Box p={2}>
						<FormControl>
							<InputLabel htmlFor="modify-device-category">Category</InputLabel>
							<Select
								value={deviceData.category}
								onChange={(e) =>
									setDeviceData({
										...deviceData,
										category: e.target.value,
									})
								}
								inputProps={{
									name: 'category',
									id: 'modify-device-category',
								}}
							>
								{deviceCategories &&
									deviceCategories.map((deviceCategory) => (
										<MenuItem
											key={deviceCategory.id}
											value={deviceCategory.id}
											data-name={deviceCategory.name}
										>
											{deviceCategory.name}
										</MenuItem>
									))}
							</Select>
						</FormControl>
					</Box>
				</Box>
			</Box>
		</Dialog>
	);
};

ModifyDeviceDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
	deviceData: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string.isRequired,
		hostname: PropTypes.string.isRequired,
		type: PropTypes.shape({
			value: PropTypes.string.isRequired,
			display_name: PropTypes.string.isRequired,
		}),
		ip: PropTypes.string.isRequired,
		mac: PropTypes.string.isRequired,
		category: PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}),
		oui: PropTypes.string,
	}),
	setDeviceData: PropTypes.func.isRequired,
	deviceCategories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
		}),
	).isRequired,
	deviceTypes: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			display_name: PropTypes.string.isRequired,
		}),
	).isRequired,
};

ModifyDeviceDialog.defaultProps = {
	deviceData: null,
};

export default ModifyDeviceDialog;
