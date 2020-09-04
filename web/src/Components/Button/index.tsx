import React, { ButtonHTMLAttributes } from 'react';

import { ButtonStyle } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FunctionComponent<ButtonProps> = ({
	children,
	...rest
}) => (
	<ButtonStyle type="button" {...rest}>
		{children}
	</ButtonStyle>
);

export default Button;
