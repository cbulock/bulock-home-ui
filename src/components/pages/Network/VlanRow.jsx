import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const VlanRow = ({ vlan }) => (
	<TableRow key={vlan.id}>
		<TableCell>{vlan.name}</TableCell>
		<TableCell>{vlan.id}</TableCell>
		<TableCell>{vlan.subnet}</TableCell>
	</TableRow>
);

VlanRow.propTypes = {
	vlan: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string.isRequired,
		subnet: PropTypes.string.isRequired,
	}).isRequired,
};

export default VlanRow;
