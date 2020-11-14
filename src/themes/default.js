import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		common: {
			black: '#000',
			white: '#fff',
		},
		background: {
			paper: '#fff',
			default: '#fafafa',
		},
		primary: {
			light: 'rgba(87, 120, 159, 1)',
			main: 'rgba(77, 104, 141, 1)',
			dark: 'rgba(61, 76, 108, 1)',
			contrastText: '#fff',
		},
		secondary: {
			light: 'rgba(255, 174, 23, 1)',
			main: 'rgba(255, 132, 0, 1)',
			dark: 'rgba(204, 105, 0, 1)',
			contrastText: '#fff',
		},
		error: {
			light: '#FFBABA',
			main: '#D8000C',
			dark: '#d32f2f',
			contrastText: '#fff',
		},
		success: {
			light: '#DFF2BF',
			main: '#4F8A10',
			contrastText: '#fff',
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)',
		},
	},
	typography: {
		fontFamily: ['Ovo', 'serif'].join(','),
	},
});

export default theme;
