import {
  Announcement,
  Categories,
  Navbar,
  Products,
  Slider,
  Newsletter,
  Footer,
} from '../components';

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
