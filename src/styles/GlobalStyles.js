import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		--color-github: #000000;
		--color-gmail: #d44638;
		--color-linkedin: #2867b2;

		--color-grey: #37322E;
		--color-grey-light: #EBEBEB;

		--color-white: #ffffff;
		--color-black: #000000;

		--color-orange: #FFC331;
		--color-purple: #CDB4DB;

		--color-book: #A259FF;
		--color-course: #EA4335;
		--color-conference: #2BA977;
		--color-employment: #1F9CF0;

   // ------------------------------------------>

		--radius-xs: 2px;
		--radius-sm: 4px;
		--radius-md: 6px;
		--radius-lg: 12px;
		--radius-xl: 20px;

		--shadow-1: 0 0 5px 0 rgba(0, 0, 0, 0.5);
		--shadow-2: -1px 1px 2px 0 rgba(0, 0, 0, 0.25);
		--shadow-3: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
		--shadow-4: 0 6px 4px 0 rgba(0, 0, 0, 0.35);
		--shadow-5: 0 3px 4px 0 rgba(0, 0, 0, 0.25);

		--space-xs: 0.2rem;
		--space-sm: 0.4rem;
		--space-md: 0.6rem;
		--space-lg: 0.8rem;
		--space-xl: 1rem;

		--font-text: 'Roboto', sans-serif;
		--font-heading: 'Sen', sans-serif;

		--weight-thin: 300;
		--weight-rg: 400;
		--weight-bold: 700;

		--text-xs: 1.2rem;
		--text-sm: 1.6rem;
		--text-md: 1.8rem;
		--text-lg: 2rem;
		--text-xl: 2.8rem;

	// ------------------------------------------>
}

	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;

		font-family: var(--font-text);
		color: var(--color-text);
		font-weight: var(--weight-rg);
	}

	html {
   		font-size: 62.5%;
   		box-sizing: border-box;

		@media only screen and (min-width: 500px) {
			font-size: 70%;
		}

		@media only screen and (min-width: 700px) {
			font-size: 68.75%;
		}

		@media only screen and (min-width: 1000px) {
			font-size: 75%;
		}
}


`;

export default GlobalStyles;
