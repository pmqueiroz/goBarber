import React from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
	function handleSubmit(data: object): void { // eslint-disable-line
		console.log(data);
	}

	return (
		<Container>
			<Background />
			<Content>
				<img src={logoImg} alt="GoBarber" />

				<Form onSubmit={handleSubmit}>
					<h1>Create Account</h1>
					<Input name="user" icon={FiUser} placeholder="User" />
					<Input name="email" icon={FiMail} placeholder="Email" />
					<Input
						name="password"
						icon={FiLock}
						type="password"
						placeholder="Password"
					/>
					<Button type="submit">Sign Up</Button>
				</Form>

				<a href="signon">
					<FiArrowLeft />
					Back to Login
				</a>
			</Content>
		</Container>
	);
};

export default SignUp;
