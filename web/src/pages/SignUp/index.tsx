import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
	const handleSubmit = useCallback(async (data: object) => {
		try {
			const schema = Yup.object().shape({
				name: Yup.string().required('Name required'),
				email: Yup.string()
					.required('Email required')
					.email('Insert a valid email'),
				password: Yup.string().min(8, 'Minimum of 8 characters'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			console.log(err);
		}
	}, []);

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
