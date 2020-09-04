import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
	<Container>
		<Background />
		<Content>
			<img src={logoImg} alt="GoBarber" />

			<form>
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
			</form>

			<a href="signon">
				<FiArrowLeft />
				Back to Login
			</a>
		</Content>
	</Container>
);

export default SignUp;
