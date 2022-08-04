import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
	html{
		font-size: 24px;
		font-weight: 400;
		font-family: 'Inter', sans-serif;
	}
	h1, h2, h3, h4, h5, p, span {
		font-style: normal;
	}
	p, span {
		letter-spacing: .75px
	}
`;
