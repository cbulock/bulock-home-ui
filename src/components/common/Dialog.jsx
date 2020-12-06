import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import MuiDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

const SHeader = styled(Grid)`
	color: ${({ theme }) => theme.palette.primary.contrastText};
	background-color: ${({ theme }) => theme.palette.primary.light};
`;

const SButtonsContainer = styled(Grid)`
	padding: 1em 2em;
`;

const SCloseButton = styled(IconButton)`
	margin-right: 0.5em;
	height: 2em;
	width: 2em;
`;

const SCloseIcon = styled(CloseIcon)`
	color: ${({ theme }) => theme.palette.primary.contrastText};
`;

const Dialog = ({ open, setOpen, title, children, buttons }) => {
	return (
		<MuiDialog open={open} onClose={() => setOpen(false)}>
			<SHeader container justify="space-between" alignItems="center">
				<DialogTitle>{title}</DialogTitle>
				<SCloseButton onClick={() => setOpen(false)}>
					<SCloseIcon />
				</SCloseButton>
			</SHeader>

			<DialogContent>{children}</DialogContent>
			<SButtonsContainer container spacing={2} justify="flex-end">
				<Grid item>
					<Button onClick={() => setOpen(false)}>Cancel</Button>
				</Grid>
				{buttons &&
					buttons.map((button) => (
						<Grid item key={button.label}>
							<Button
								onClick={button.onClick}
								variant="contained"
								color={button.color || 'primary'}
							>
								{button.label}
							</Button>
						</Grid>
					))}
			</SButtonsContainer>
		</MuiDialog>
	);
};

Dialog.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			onClick: PropTypes.func.isRequired,
			color: PropTypes.string,
		}),
	),
};

Dialog.defaultProps = {
	title: '',
	buttons: [],
};

export default Dialog;
