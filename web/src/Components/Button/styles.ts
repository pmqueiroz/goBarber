import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonStyle = styled.button`
	transition: background-color 0.2s;
	background: #ff9000;
	border-radius: 10px;
	font-weight: 500;
	margin-top: 16px;
	padding: 0 16px;
	color: #312e38;
	height: 56px;
	width: 100%;
	border: 0;

	&:hover {
		background: ${shade(0.2, '#ff9000')};
	}
`;
