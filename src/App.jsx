import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import theme from './themes/default';
import GlobalStyle from './components/common/GlobalStyle';

import DeviceList from './components/pages/Devices/DeviceList';

const App = () => (
	<MuiThemeProvider theme={theme}>
		<StyledThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route path="/">
						<DeviceList />
					</Route>
					<Route path="/devices">
						<DeviceList />
					</Route>
				</Switch>
			</Router>
		</StyledThemeProvider>
	</MuiThemeProvider>
);

export default App;
