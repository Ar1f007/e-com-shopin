import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;

  position: relative;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  color: #fff;
  margin: 20px;
`;

export const Button = styled.button`
  border: 0;
  padding: 10px 15px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
`;
