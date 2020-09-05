import styled from 'styled-components';

export const Container = styled.div`
	position: relative;

	span {
		background: #ff9000;
		color: #312e38;
		padding: 8px;
		border-radius: 4px;
		font-size: 14px 500;
		opacity: 0;
		transition: opacity 0.4s;
		visibility: hidden;

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
		opacity: 1;
		visibility: visible;
	}
`;
