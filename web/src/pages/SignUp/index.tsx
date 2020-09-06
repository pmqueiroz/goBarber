import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';

interface SignUpFormData {
	name: string;
	email: string;
	password: string;
}

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);
	const { addToast } = useToast();
	const history = useHistory();

	const handleSubmit = useCallback(
		async (data: SignUpFormData) => {
			try {
				formRef.current?.setErrors({});
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

				await api.post('/users', data);

				history.push('/');

				addToast({
					type: 'success',
					title: 'Thanks!',
					description: 'your account has been successfully created',
				});
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err);

					formRef.current?.setErrors(errors);

					return;
				}
				addToast({
					type: 'error',
					title: 'Problemo!',
					description: 'Invalid Fields. Try again?',
				});
			}
		},
		[addToast, history],
	);

	return (
		<Container>
			<Background />
			<Content>
				<AnimationContainer>
					<img src={logoImg} alt="GoBarber" />

					<Form ref={formRef} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<Input name="name" icon={FiUser} placeholder="User" />
						<Input name="email" icon={FiMail} placeholder="Email" />
						<Input
							name="password"
							icon={FiLock}
							type="password"
							placeholder="Password"
						/>
						<Button type="submit">Sign Up</Button>
					</Form>

					<Link to="/">
						<FiArrowLeft />
						Back to Login
					</Link>
				</AnimationContainer>
			</Content>
		</Container>
	);
};

export default SignUp;
