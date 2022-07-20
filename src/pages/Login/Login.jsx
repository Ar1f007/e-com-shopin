import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/api';
import { Container, Form, Input, Title, Wrapper, Button, Error, Box } from './login.styles';
import { Link } from 'react-router-dom';

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
        {error ? <Error>Invalid credentials</Error> : null}
        <Title>LOG IN</Title>
        <Form>
          <Input required placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <Input
            required
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            {isFetching ? 'Login...' : 'Login'}
          </Button>
          <Box>
            <Link
              to="/register"
              style={{
                fontSize: '12px',
                color: '#000',
              }}
            >
              CREATE A NEW ACCOUNT
            </Link>

            <Link
              to="/"
              style={{
                fontSize: '12px',
                color: '#000',
              }}
            >
              Home
            </Link>
          </Box>
        </Form>
      </Wrapper>
    </Container>
  );
};
