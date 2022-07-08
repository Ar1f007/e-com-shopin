import { Button, Container, Form, Input, Title, Wrapper } from './register.styles';

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />

          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
