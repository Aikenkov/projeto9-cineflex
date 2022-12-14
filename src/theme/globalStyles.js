import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');
    body {
        background-color: #ffffff;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		color: #293845;
		
    }

	a {
        text-decoration: none;
	}
`;



export default GlobalStyle;