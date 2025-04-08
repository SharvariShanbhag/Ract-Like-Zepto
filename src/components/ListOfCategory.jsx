import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const ListOfCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts');
        // Extract unique categories from products
        const uniqueCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="mb-4">All Categories</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {categories.map((category, index) => (
          <Col key={index}>
            <Card className="h-100 category-card">
              <Card.Img 
                variant="top" 
                src={`https://source.unsplash.com/random/300x200/?${category}`} 
                alt={category}
              />
              <Card.Body>
                <Card.Title className="text-center">{category}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListOfCategory;