import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  ButtonContainer,
  Error,
} from './register.styles';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/api';

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [email, setEmail] = useState('');
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      alert('passwords must match');
      return;
    }

    register(dispatch, { username, email, password });
  };

  return (
    <Container>
      <Wrapper>
        {error && <Error>Something went wrong</Error>}
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input required placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <Input required placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Input required placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <Input
            required
            placeholder="confirm password"
            onChange={(e) => setCPassword(e.target.value)}
          />

          <ButtonContainer>
            <Button onClick={handleClick}>{isFetching ? 'Creating...' : 'Create'}</Button>
            <Link to="/login">Login</Link>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};
