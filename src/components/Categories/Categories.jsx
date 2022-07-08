import { Container } from './categories.styles';
import { categories } from '../../data';
import { CategoryItem } from './CategoryItem/CategoryItem';
import { useId } from 'react';

export const Categories = () => {
  const id = useId();

  return (
    <Container>
      {categories.map((category, i) => (
        <CategoryItem key={`${id}-${i}`} category={category} />
      ))}
    </Container>
  );
};
