import { Container } from './products.styles';
import { popularProducts } from '../../data';
import { Product } from './Product/Product';
import { useId } from 'react';

export const Products = () => {
  const id = useId();

  return (
    <Container>
      {popularProducts.map((product, i) => (
        <Product key={`${id}-${i}`} product={product} />
      ))}
    </Container>
  );
};
