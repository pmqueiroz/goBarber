import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title } from './styles';

const SignIn: React.FunctionComponent = () => (
  <Container>
    <Image source={logoImg} />

    <Title>Welcome Back</Title>

    <Input name="email" icon="mail" placeholder="E-mail" />
    <Input name="password" icon="lock" placeholder="Password" />

    <Button onPress={() => { console.log('deu'); }}>Log in</Button>
  </Container>
);

export default SignIn;
