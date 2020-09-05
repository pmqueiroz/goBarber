import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(async (data: object) => {
		try {
			formRef.current?.setErrors({});
			const schema = Yup.object().shape({
				email: Yup.string()
					.required('Email required')
					.email('Insert a valid email'),
				password: Yup.string().required('Password required'),
			});

			await schema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			const errors = getValidationErrors(err);

			formRef.current?.setErrors(errors);
		}
	}, []);

	return (
		<Container>
			<Content>
				<img src={logoImg} alt="GoBarber" />
				<Form ref={formRef} onSubmit={handleSubmit}>
					<h1>Sign In</h1>
					<Input name="email" icon={FiMail} placeholder="Email" />
					<Input
						name="password"
						icon={FiLock}
						type="password"
						placeholder="Password"
					/>
					<Button type="submit">Logon</Button>

					<a href="forgot">Forgot Password</a>
				</Form>

				<a href="signon">
					<FiLogIn />
					Create Account
				</a>
			</Content>
			<Background />
		</Container>
	);
};

export default SignIn;
