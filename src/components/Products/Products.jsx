import { Container } from './products.styles';
import { Product } from './Product/Product';
import { useEffect, useId, useState } from 'react';
import { publicRequest } from '../../config/axios';

export const Products = ({ category, filters }) => {
  const id = useId();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // const res = await axios(
        //   category
        //     ? `https://morning-tor-83426.herokuapp.com/api/v1/products?category=${category}`
        //     : `https://morning-tor-83426.herokuapp.com/api/v1/products`
        // );

        const res = category
          ? await publicRequest.get(`/products?category=${category}`)
          : await publicRequest.get('/products');

        setProducts(res.data);
      } catch (error) {}
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products?.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key].includes(value))
        )
      );
  }, [products, category, filters]);

  // useEffect(() => {
  //   if (sort === 'newest') {
  //     setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
  //   } else if (sort === 'asc') {
  //     setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
  //   } else {
  //     setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
  //   }
  // }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts?.map((product, i) => <Product key={`${id}-${i}`} product={product} />)
        : products
            ?.slice(0, 8)
            .map((product, i) => <Product key={`${id}-${i}`} product={product} />)}
    </Container>
  );
};
