import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
	align-items: stretch;
	height: 100vh;
	display: flex;
`;

export const Content = styled.div`
	flex-direction: column;
	place-content: center;
	align-items: center;
	max-width: 700px;
	display: flex;
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
		margin-top: 24px;
		color: #ff9000;
		display: block;

		align-items: center;
		display: flex;

		svg {
			margin-right: 16px;
		}

		&:hover {
			color: ${shade(0.2, '#ff9000')};
		}
	}
`;

export const Background = styled.div`
	background: url(${signInBackgroundImg}) no-repeat center;
	background-size: cover;
	flex: 1;
`;
