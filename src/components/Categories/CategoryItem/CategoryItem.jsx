import { Container, Image, Info, Title, Button } from './categoryItem.styles';
import { Link } from 'react-router-dom';

export const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Link to={`products/${category.category}`}>
        <Image src={category.img} />

        <Info>
          <Title>{category.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};
