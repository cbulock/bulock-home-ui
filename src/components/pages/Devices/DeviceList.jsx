import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { get } from 'modules/api';
import CategoryDisplay from './CategoryDisplay';
import ModifyDeviceDialog from '../../ModifyDeviceDialog';

const defaultDeviceState = {
	name: '',
	type: '',
	category: null,
	ip: '',
	mac: '',
	hostname: '',
	oui: '',
};

const DeviceList = () => {
	const [devices, setDevices] = useState([]);
	const [deviceTypes, setDeviceTypes] = useState(null);
	const [deviceCategories, setDeviceCategories] = useState(null);
	const [modifyDeviceDialogOpen, setModifyDeviceDialogOpen] = useState(false);
	const [editDeviceData, setEditDeviceData] = useState(defaultDeviceState);

	const fetchDevices = () => {
		get('/devices')
			.then((data) => {
				setDevices(data);
			})
			// eslint-disable-next-line no-console
			.catch(console.log);
	};

	useEffect(() => {
		fetchDevices();
	}, []);

	useEffect(() => {
		get('/devices/types')
			.then((data) => {
				setDeviceTypes(data);
			})
			// eslint-disable-next-line no-console
			.catch(console.log);
	}, []);

	useEffect(() => {
		get('/devices/categories')
			.then((data) => {
				setDeviceCategories(data);
			})
			// eslint-disable-next-line no-console
			.catch(console.log);
	}, []);

	const handleAdd = () => {
		setEditDeviceData(defaultDeviceState);
		setModifyDeviceDialogOpen(true);
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">Devices</Typography>
				</Toolbar>
			</AppBar>
			<TableContainer component={Paper}>
				<Box m={1}>
					<Button
						color="primary"
						variant="contained"
						onClick={handleAdd}
						startIcon={<AddIcon />}
					>
						Add Device
					</Button>
				</Box>

				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Hostname</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>IP</TableCell>
							<TableCell>MAC</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{deviceCategories &&
							devices &&
							deviceCategories.map((category) => (
								<CategoryDisplay
									key={category.id}
									category={category}
									devices={devices}
									setEditDeviceData={setEditDeviceData}
									setModifyDeviceDialogOpen={setModifyDeviceDialogOpen}
								/>
							))}
					</TableBody>
				</Table>
			</TableContainer>

			<ModifyDeviceDialog
				open={modifyDeviceDialogOpen}
				setOpen={setModifyDeviceDialogOpen}
				deviceTypes={deviceTypes}
				deviceCategories={deviceCategories}
				deviceData={editDeviceData}
				setDeviceData={setEditDeviceData}
				fetchDevices={fetchDevices}
			/>
		</>
	);
};

export default DeviceList;
