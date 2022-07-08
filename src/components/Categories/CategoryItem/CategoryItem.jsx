import { Container, Image, Info, Title, Button } from './categoryItem.styles';

export const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />

      <Info>
        <Title>{category.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
