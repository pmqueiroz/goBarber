import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
	email: string;
	password: string;
}

interface AuthorizationContext {
	name: string;
	signIn(credential: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthorizationContext>(
	{} as AuthorizationContext,
);

export const AuthProvider: React.FunctionComponent = ({ children }) => {
	const signIn = useCallback(async ({ email, password }) => {
		const response = await api.post('sessions', {
			email,
			password,
		});

		console.log(response.data);
	}, []);

	return (
		<AuthContext.Provider value={{ name: 'Cleiton', signIn }}>
			{children}
		</AuthContext.Provider>
	);
};
