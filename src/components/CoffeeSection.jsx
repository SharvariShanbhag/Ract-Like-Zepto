import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CoffeeSection = () => {
  const navigate = useNavigate();
  const coffeeProducts = [
    {
      id: 1,
      name: 'Hot Chocolate',
      price: 135,
      originalPrice: 270,
      size: '250 ml',
      discount: '51% Off',
      image: 'https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/76f7bedc-0cf0-4a64-ae7d-476e187346d8.jpeg'
    },
    {
      id: 2,
      name: 'Vietnamese Cold Coffee',
      price: 189,
      originalPrice: 439,
      size: '450 ml',
      discount: '56% Off',
      image: 'https://cdn.zeptonow.com/production/tr:w-640,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c.jpeg'
    },
    {
      id: 3,
      name: 'Hazelnut Cappuccino',
      price: 159,
      originalPrice: 334,
      size: '250 ml',
      discount: '52% Off',
      image: 'https://cdn.zeptonow.com/production/tr:w-640,ar-4523-4523,pr-true,f-auto,q-80/cms/product_variant/4141ea67-1e91-4b53-99f7-ed0dcea226e9.jpeg'
    },
    {
      id: 4,
      name: 'Iced Americano',
      price: 129,
      originalPrice: 319,
      size: '450 ml',
      discount: '59% Off',
      image: 'https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/4e44890d-d561-4972-b190-45b0324acce8.jpeg'
    },
    {
        id: 5,
        name: 'Caramel Macchiato',
        price: 169,
        originalPrice: 359,
        size: '300 ml',
        discount: '52% Off',
        image: 'https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-featured-image-1.jpg'
      },
      {
        id: 6,
        name: 'Spanish Latte',
        price: 179,
        originalPrice: 379,
        size: '350 ml',
        discount: '52% Off',
        image: 'https://www.littlesugarsnaps.com/wp-content/uploads/2022/09/spanish-latte-square.jpg'
      },
      {
        id: 8,
        name: 'Vanilla Latte',
        price: 149,
        originalPrice: 299,
        size: '300 ml',
        discount: '50% Off',
        image: 'https://www.smells-like-home.com/wp-content/uploads/2022/04/Vanilla-Latte-8-copy-735x671.jpg'
      },
      {
        id: 13,
        name: 'Salted Caramel Cold Brew',
        price: 179,
        originalPrice: 359,
        size: '350 ml',
        discount: '50% Off',
        image: 'https://thebigmansworld.com/wp-content/uploads/2021/11/salted-caramel-cream-cold-brew-recipe.jpeg'
      },
    
  ];

  return (
    <div className="coffee-section">
      <Container>
        <h2 className="section-title">COFFEE LOVERS</h2>
        <p className="text-center mb-4">Dive into the world of fresh brew</p>
        
        <Row xs={1} md={2} lg={4} className="g-4">
          {coffeeProducts.map((product) => (
            <Col key={product.id}>
              <div className="product-card h-100 p-3">
                <div className="position-relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-img w-100 rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/coffee/placeholder.jpg';
                    }}
                  />
                  <span className="discount-badge">{product.discount}</span>
                </div>
                <div className="mt-3">
                  <h5 className="product-title">{product.name}</h5>
                  <p className="text-muted mb-2">{product.size}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="product-price">₹{product.price}</span>
                      <span className="original-price ms-2">₹{product.originalPrice}</span>
                    </div>
                    <Button variant="zepto" size="sm">Add</Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-4">
          <Button variant="zepto-outline" onClick={() => navigate('/categories/coffee')}>
            More Items &gt;
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CoffeeSection;