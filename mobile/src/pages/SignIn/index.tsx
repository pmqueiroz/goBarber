import React from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FunctionComponent = () => (
  <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={logoImg} />

          <View>
            <Title>Welcome Back</Title>
          </View>

          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Password" />

          <Button onPress={() => { console.log('deu'); }}>Log in</Button>

          <ForgotPassword>
            <ForgotPasswordText onPress={() => { console.log('deu'); }}>
              Forgot my password
            </ForgotPasswordText>
          </ForgotPassword>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <CreateAccountButton>
      <Icon name="log-in" size={20} color="#ff9000" />
      <CreateAccountButtonText>
        Create Account
      </CreateAccountButtonText>
    </CreateAccountButton>
  </>
);

export default SignIn;
