import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;

  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  z-index: 2;

  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;

  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const Image = styled.img`
  height: 80%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px; ;
`;
export const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #000;
    color: #fff;
  }
`;
