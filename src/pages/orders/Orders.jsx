import { useEffect, useState } from 'react';
import { Footer, Navbar } from '../../components';
import { useSelector } from 'react-redux';
import { OrderList } from './OrderList';
import { userRequest } from '../../config/axios';

export const Orders = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get(`/orders/${user._id}`);
        setProducts(res.data);
      } catch (error) {}
    };

    getOrders();
  }, [user._id]);
  return (
    <div>
      <Navbar />
      <OrderList products={products} />
      <Footer />
    </div>
  );
};
