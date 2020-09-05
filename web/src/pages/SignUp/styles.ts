import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
	align-items: stretch;
	height: 100vh;
	display: flex;
`;

export const Content = styled.div`
	place-content: center;
	flex-direction: column;
	align-items: center;
	display: flex;

	max-width: 700px;
	width: 100%;

	form {
		text-align: center;
		margin: 80px 0;
		width: 340px;

		h1 {
			margin-bottom: 24px;
		}

		a {
			transition: color 0.2s;
			text-decoration: none;
			margin-top: 24px;
			color: #f4ede8;
			display: block;

			&:hover {
				color: ${shade(0.2, '#f4ede8')};
			}
		}
	}

	> a {
		transition: color 0.2s;
		text-decoration: none;
		align-items: center;
		margin-top: 24px;
		color: #f4ede8;
		display: block;
		display: flex;

		svg {
			margin-right: 16px;
		}

		&:hover {
			color: ${shade(0.2, '#f4ede8')};
		}
	}
`;

export const Background = styled.div`
	background: url(${signUpBackgroundImg}) no-repeat center;
	background-size: cover;
	flex: 1;
`;
