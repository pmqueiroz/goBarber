import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const handleSubmit = useCallback(async (data: object) => {
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
		} catch (err) {
			const errors = getValidationErrors(err);

			formRef.current?.setErrors(errors);
		}
	}, []);

	return (
		<Container>
			<Background />
			<Content>
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
			</Content>
		</Container>
	);
};

export default SignUp;
