import { Announcement, Categories, Navbar, Products, Slider, Newsletter } from '../components';

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};
