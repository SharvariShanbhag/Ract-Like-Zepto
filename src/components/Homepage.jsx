import React from 'react';
import HeroSection from './HeroSection';
import CorouselCategory from './CorouselCategory';
import HighlighetedCoffeeSection from './HighlighetedCoffeeSection';
import ProductList from './ProductList';
import { Container } from 'react-bootstrap';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Container className="my-5">
        <h2 className="mb-4">Shop by Category</h2>
        <CorouselCategory />
      </Container>
      <Container className="my-5">
        <h2 className="mb-4">Popular Products</h2>
        <ProductList />
      </Container>
      <HighlighetedCoffeeSection />
    </div>
  );
};

export default Homepage;