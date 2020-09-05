import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		outline:0;
	}

	body {
		-webkit-font-smoothing: antialiased;
		background: #312e38;
		color: #FFF;
	}

	body, input, button {
		font-family: 'Roboto Slab', serif;
		font-size: 16px;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 500;
	}

	button {
		cursor: pointer;
	}

`;
