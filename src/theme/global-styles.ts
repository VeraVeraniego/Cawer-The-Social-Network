import { createGlobalStyle } from "styled-components";
type Palette = Record<string, string>;

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

const palette: Palette = {
  green: "#2d4440",
  gray: "#c1b59f",
  yellow: "#c69433",
  mustard: "#9f7425",
  brown: "#83611d",
  orange: "#de6936",
};
export default palette;
