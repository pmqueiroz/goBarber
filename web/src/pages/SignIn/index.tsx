import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
	<Container>
		<Content>
			<img src={logoImg} alt="GoBarber" />

			<form>
				<h1>Sign In</h1>
				<Input name="Email" icon={FiMail} placeholder="Email" />
				<Input
					name="Password"
					icon={FiLock}
					type="password"
					placeholder="Password"
				/>
				<Button type="submit">Logon</Button>

				<a href="forgot">Forgot Password</a>
			</form>

			<a href="signon">
				<FiLogIn />
				Create Account
			</a>
		</Content>
		<Background />
	</Container>
);

export default SignIn;
