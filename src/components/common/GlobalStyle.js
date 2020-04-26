import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=B612+Mono:wght@400;700&display=swap');

	code {
		font-family: 'B612 Mono', monospace;
	}
`;

export default GlobalStyle;
