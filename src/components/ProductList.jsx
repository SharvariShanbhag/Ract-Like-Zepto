import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts');
        setProducts(response.data.slice(0, 8)); // Get first 8 products
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Container className="text-center my-5">Loading products...</Container>;
  }

  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <Card className="h-100 product-card">
            <Card.Img 
              variant="top" 
              src={product.image || `https://source.unsplash.com/random/300x200/?${product.name}`} 
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
  );
};

export default ProductList;