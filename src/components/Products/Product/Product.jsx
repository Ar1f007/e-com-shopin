import { Circle, Container, Icon, Image, Info } from './product.styles';
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';

export const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>

        <Icon>
          <SearchOutlined />
        </Icon>

        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
