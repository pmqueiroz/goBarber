import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	span {
		transition: opacity 0.4s;
		background: #ff9000;
		font-size: 14px 500;
		visibility: hidden;
		border-radius: 4px;
		color: #312e38;
		padding: 8px;
		opacity: 0;

		transform: translateX(-50%);
		bottom: calc(100% + 12px);
		position: absolute;
		width: 160px;
		left: 50%;

		&::before {
			border-color: #ff9000 transparent;
			border-width: 6px 6px 0 6px;
			transform: translateX(-50%);
			border-style: solid;
			position: absolute;
			content: '';
			top: 100%;
			left: 50%;
		}
	}

	&:hover span {
		visibility: visible;
		opacity: 1;
	}
`;
