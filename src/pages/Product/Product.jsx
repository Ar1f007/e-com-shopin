import { Announcement, Footer, Navbar } from '../../components';
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from './product.styles';

import { Add, Remove } from '@material-ui/icons';

export const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>

        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore quidem deserunt
            maiores rem laudantium aliquid porro consectetur cumque eius beatae repudiandae sed,
            vitae reprehenderit natus illo odio, aspernatur consequuntur aperiam omnis vel dolorum
            esse. Repellat sint quos neque molestias doloribus dolorem obcaecati velit quam
            veritatis saepe. Beatae atque ex accusantium quos quod consequuntur quidem corporis
            laborum, delectus, natus sint? Omnis, repellendus doloribus. Repudiandae unde amet
            commodi eligendi eveniet. Exercitationem minus iste nihil laudantium nostrum quos animi
            hic natus eum magnam laboriosam dicta doloremque quod eveniet eius, cupiditate aperiam
            quasi distinctio! Fugit veniam voluptates nesciunt praesentium tempora odio perspiciatis
            sequi!
          </Desc>
          <Price>$ 20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
