import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const HighlighetedCoffeeSection = () => {
  const [coffeeProducts, setCoffeeProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoffeeProducts = async () => {
      try {
        const response = await axios.get('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts');
        // Filter products that have "coffee" in name or category
        const coffeeItems = response.data.filter(product => 
          product.name.toLowerCase().includes('coffee') || 
          product.category.toLowerCase().includes('coffee')
        ).slice(0, 4);
        setCoffeeProducts(coffeeItems);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching coffee products:', error);
        setLoading(false);
      }
    };

    fetchCoffeeProducts();
  }, []);

  if (loading) {
    return <Container className="text-center my-5">Loading coffee products...</Container>;
  }

  return (
    <div className="bg-light py-5 my-5">
      <Container>
        <h2 className="text-center mb-5">Coffee & Related Products</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {coffeeProducts.map((product) => (
            <Col key={product.id}>
              <Card className="h-100 product-card">
                <Card.Img 
                  variant="top" 
                  src={product.image || `https://source.unsplash.com/random/300x200/?coffee`} 
                  className="product-img"
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-muted">{product.category}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">₹{product.price}</span>
                    <Button variant="success" size="sm">Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HighlighetedCoffeeSection;