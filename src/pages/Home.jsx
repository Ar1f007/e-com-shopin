import { Announcement, Categories, Navbar, Products, Slider } from '../components';

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};
