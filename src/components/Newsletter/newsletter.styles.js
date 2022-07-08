import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
`;
export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({
    textAlign: 'center',
  })}
`;
export const InputContainer = styled.div`
  width: 35%;
  height: 40px;
  background-color: #fff;
  border: 1px solid lightgray;

  display: flex;
  justify-content: space-between;

  overflow: hidden;

  ${mobile({
    width: '80%',
  })}
`;
export const Input = styled.input`
  border: 0;
  flex: 8;
  padding-left: 20px;
`;
export const Button = styled.button`
  flex: 1;

  border: 0;
  background-color: teal;
  color: #fff;
`;
