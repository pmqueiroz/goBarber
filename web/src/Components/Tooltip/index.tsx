import React from 'react';

import { Container } from './styles';

interface TooltipProps {
	message: string;
	className?: string;
}

const Tooltip: React.FunctionComponent<TooltipProps> = ({
	message,
	children,
	className,
}) => {
	return (
		<Container className={className}>
			{children}
			<span>{message}</span>
		</Container>
	);
};

export default Tooltip;
