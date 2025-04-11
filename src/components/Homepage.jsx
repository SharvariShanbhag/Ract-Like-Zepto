import React from 'react';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import CoffeeSection from './CoffeeSection';
import ProductGrid from './ProductGrid';
import { Container } from 'react-bootstrap';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Container className="my-5">
        <CategoryCarousel />
      </Container>
      <CoffeeSection />
      <Container className="my-5">
        <h2 className="section-title">Popular Products</h2>
        <ProductGrid />
      </Container>
    </div>
  );
};

export default Homepage;