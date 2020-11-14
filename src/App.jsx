import React from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	StylesProvider as MuiStylesProvider,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SimpleReactLightbox from 'simple-react-lightbox';

import theme from './themes/default';
import GlobalStyle from './components/common/GlobalStyle';

import Header from './components/common/Header';

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Wedding from './components/pages/Wedding';
import Portraits from './components/pages/Portraits';

const App = () => (
	<>
		<Helmet>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#57789f" />
			<meta
				name="description"
				content="Portraiture & Fine Art Photography by Louis Villafranca"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Ovo&display=swap"
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
			<title>Classic Shots</title>
		</Helmet>
		<SimpleReactLightbox>
			<MuiThemeProvider theme={theme}>
				<MuiStylesProvider injectFirst>
					<StyledThemeProvider theme={theme}>
						<GlobalStyle />
						<Router>
							<Header />
							<Switch>
								<Route exact path="/weddings">
									<Wedding />
								</Route>
								<Route exact path="/portraits">
									<Portraits />
								</Route>
								<Route exact path="/">
									<Home />
								</Route>
								<Route>
									<NotFound />
								</Route>
							</Switch>
						</Router>
					</StyledThemeProvider>
				</MuiStylesProvider>
			</MuiThemeProvider>
		</SimpleReactLightbox>
	</>
);

export default App;
