import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button,
} from './slider.styles';
import { sliderItems } from '../../data';

const styles = {
  color: '#f7f7f7',
  fontSize: '40px',
};

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    console.log(sliderItems.length);
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined style={styles} onClick={() => handleClick('left')} />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slide) => (
          <Slide bg={slide.bg}>
            <ImageContainer>
              <Image src={slide.img} />
            </ImageContainer>

            <InfoContainer>
              <Title>{slide.title}</Title>
              <Desc>{slide.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right">
        <ArrowRightOutlined style={styles} onClick={() => handleClick('right')} />
      </Arrow>
    </Container>
  );
};
