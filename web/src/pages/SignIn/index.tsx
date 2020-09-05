import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
import logoImg from '../../assets/logo.svg';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Container, Content, Background } from './styles';

interface SignInFormData {
	email: string;
	password: string;
}

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const { signIn } = useAuth();

	const handleSubmit = useCallback(
		async (data: SignInFormData) => {
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

				signIn({
					email: data.email,
					password: data.password,
				});
			} catch (err) {
				const errors = getValidationErrors(err);

				formRef.current?.setErrors(errors);
			}
		},
		[signIn],
	);

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
