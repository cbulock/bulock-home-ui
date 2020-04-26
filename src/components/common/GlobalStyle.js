import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=B612+Mono:wght@400;700&display=swap');

	body {
		margin: 0;
		font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: 'B612 Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
	}
`;

export default GlobalStyle;
