import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container className="text-center py-5">
        <h1 className="display-4 fw-bold mb-4">Groceries Delivered in 10 Minutes</h1>
        <p className="lead mb-5">Get your favorite products at your doorstep in no time</p>
        
        <Form className="d-flex search-bar">
          <Form.Control
            type="search"
            placeholder="Search for products..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="success" type="submit">
            <FaSearch />
          </Button>
        </Form>
        
        <div className="mt-4">
          <Button variant="outline-success" className="me-2">Fruits & Vegetables</Button>
          <Button variant="outline-success" className="me-2">Dairy & Breakfast</Button>
          <Button variant="outline-success" className="me-2">Beverages</Button>
          <Button variant="outline-success">Snacks & Branded Foods</Button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;