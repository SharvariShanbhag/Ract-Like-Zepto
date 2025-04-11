import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CategoriesPage = () => {
  const categories = [
    { name: 'Fruits & Vegetables', image: '/images/categories/fruits-vegetables.jpg' },
    { name: 'Atta, Rice, Oil & Dals', image: '/images/categories/atta-rice.jpg' },
    { name: 'Masala & Dry Fruits', image: '/images/categories/masala-dryfruits.jpg' },
    { name: 'Sweet Cravings', image: '/images/categories/sweets.jpg' },
    { name: 'Frozen Food & Ice Creams', image: '/images/categories/frozen-food.jpg' },
    { name: 'Baby Food', image: '/images/categories/baby-food.jpg' },
    { name: 'Dairy, Bread & Eggs', image: '/images/categories/dairy.jpg' },
    { name: 'Cold Drinks & Juices', image: '/images/categories/drinks.jpg' },
    { name: 'Munchies', image: '/images/categories/snacks.jpg' },
    { name: 'Meats, Fish & Eggs', image: '/images/categories/meat.jpg' },
    { name: 'Breakfast & Sauces', image: '/images/categories/breakfast.jpg' },
    { name: 'Tea, Coffee & More', image: '/images/categories/tea-coffee.jpg' },
    { name: 'Biscuits', image: '/images/categories/biscuits.jpg' },
    { name: 'Makeup & Beauty', image: '/images/categories/beauty.jpg' },
    { name: 'Bath & Body', image: '/images/categories/bath-body.jpg' },
    { name: 'Cleaning Essentials', image: '/images/categories/cleaning.jpg' },
    { name: 'Home Needs', image: '/images/categories/home-needs.jpg' },
    { name: 'Electricals & Accessories', image: '/images/categories/electronics.jpg' },
    { name: 'Hygiene & Grooming', image: '/images/categories/hygiene.jpg' },
    { name: 'Health & Baby Care', image: '/images/categories/health.jpg' },
    { name: 'Homegrown Brands', image: '/images/categories/homegrown.jpg' },
    { name: 'Paan Corner', image: '/images/categories/paan-corner.jpg' },
  ];

  return (
    <Container className="my-5">
      <h2 className="section-title mb-4">Categories</h2>
      <Row xs={2} md={3} lg={4} xl={5} className="g-4">
        {categories.map((category, index) => (
          <Col key={index}>
            <Card className="category-card h-100">
              <Card.Img 
                variant="top" 
                src={category.image} 
                className="category-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/categories/placeholder.jpg';
                }}
              />
              <Card.Body className="text-center">
                <Card.Title className="category-title">{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesPage;