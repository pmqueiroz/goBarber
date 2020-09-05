import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
	isFocused: boolean;
	isErrored: boolean;
	isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
	border: 2px solid #232129;
	background: #232129;
	border-radius: 10px;
	color: #666360;
	padding: 16px;
	width: 100%;

	align-items: center;
	display: flex;

	& + div {
		margin-top: 8px;
	}

	${props =>
		props.isErrored &&
		css`
			border-color: #c53030;
		`}

	${props =>
		props.isFocused &&
		css`
			color: #ff9000;
			border-color: #ff9000;
		`}

	${props =>
		props.isFilled &&
		css`
			color: #ff9000;
		`}

	input {
		background: transparent;
		color: #f4ede8;
		border: 0;
		flex: 1;

		&::placeholder {
			color: #666360;
		}
	}

	svg {
		margin-right: 16px;
	}
`;

export const Error = styled(Tooltip)`
	margin-left: 16px;
	height: 16px;
	svg {
		margin-right: 0;
	}

	span {
		background: #c53030;
		color: #fff;

		&::before {
			border-color: #c53030 transparent;
		}
	}
`;
