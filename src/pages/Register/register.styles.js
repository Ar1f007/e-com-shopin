import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

  ${mobile({
    width: '80%',
  })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: inline-block;
`;
export const ButtonContainer = styled.div`
  margin-top: 20px;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    flexDirection: 'column',
  })}

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);

    :hover {
      text-decoration: underline;
    }

    ${mobile({
      marginTop: '10px',
    })}
  }
`;

export const Error = styled.span`
  color: #ef4444;
  margin-bottom: 0.8rem;
`;
