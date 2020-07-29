import React, { useState } from 'react';
import useFetch from 'use-http';
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
	const [modifyDeviceDialogOpen, setModifyDeviceDialogOpen] = useState(false);
	const [editDeviceData, setEditDeviceData] = useState(defaultDeviceState);

	const { data: devices = [] } = useFetch('/devices', [modifyDeviceDialogOpen]);
	const { data: deviceTypes = [] } = useFetch('/devices/types', []);
	const { data: deviceCategories = [] } = useFetch('/devices/categories', []);


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
			/>
		</>
	);
};

export default DeviceList;
