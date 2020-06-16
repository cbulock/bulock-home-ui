import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import theme from './themes/default';
import GlobalStyle from './components/common/GlobalStyle';

import DeviceList from './components/pages/Devices/DeviceList';

const App = () => (
	<>
		<Helmet>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#57789f" />
			<meta name="description" content="Bulock Network Config Panel" />
			<link
				href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=B612+Mono:wght@400;700&display=swap"
				rel="stylesheet"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/manifest.json" />
			<title>Bulock Network Config Panel</title>
		</Helmet>
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
	</>
);

export default App;
