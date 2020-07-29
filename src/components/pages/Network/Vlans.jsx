import React from 'react';
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
import VlanRow from './VlanRow';

const Vlans = () => {
	const { data: vlans = [] } = useFetch('/network/vlans', []);

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">VLANs</Typography>
				</Toolbar>
			</AppBar>
			<TableContainer component={Paper}>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>VLAN</TableCell>
							<TableCell>Network</TableCell>
							<TableCell />
						</TableRow>
					</TableHead>
					<TableBody>
						{vlans &&
							vlans.map((vlan) => <VlanRow key={vlan.id} vlan={vlan} />)}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default Vlans;
