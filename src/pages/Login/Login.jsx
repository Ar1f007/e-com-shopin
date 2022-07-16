import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/api';
import { Container, Form, Input, Title, Wrapper, Button, Link, Error } from './login.styles';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();

    if (!username || !password) return;

    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        {error && <Error>Something went wrong</Error>}
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            {isFetching ? 'Login...' : 'Login'}
          </Button>
          <Link>FORGOT THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
