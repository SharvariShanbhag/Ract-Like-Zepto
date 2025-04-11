import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const ProductGrid = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Sample product data - replace with your actual data source
  const products = [
    {
      id: 1,
      name: 'Amul Butter',
      price: 45,
      originalPrice: 55,
      image: 'https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/e15c0b10-0367-4675-a5ab-6da2abf9bee1.jpeg',
      category: 'Dairy'
    },
    {
      id: 2,
      name: 'Kurkure',
      price: 20,
      originalPrice: 25,
      image: 'https://www.bigbasket.com/media/uploads/p/xxl/102761_18-kurkure-namkeen-masala-munch.jpg',
      category: 'Snacks'
    },
    {
      id: 3,
      name: 'Cheese Slices',
      price: 120,
      originalPrice: 150,
      image: 'https://m.media-amazon.com/images/I/61+AzywctoL._AC_UF894,1000_QL80_.jpg',
      category: 'Dairy'
    },
    {
      id: 4,
      name: 'Apple Juice',
      price: 90,
      originalPrice: 110,
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/4731d75d-89a7-4332-a97b-8627953ed0da/Tropicana-100-Apple-Fruit-Juice.jpeg',
      category: 'Beverages'
    },
    {
      id: 5,
      name: 'Banana',
      price: 30,
      originalPrice: 40,
      image: 'https://cdn.zeptonow.com/production/tr:w-640,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/f35152f8-31b1-4450-ae76-fe0f8893005a.jpeg',
      category: 'Fruits'
    },
    {
      id: 6,
      name: 'Chocolate Box',
      price: 200,
      originalPrice: 250,
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1100-1100,pr-true,f-auto,q-80/cms/product_variant/af1efc76-00b7-49bb-a0fd-5d4e167ff611/Cadbury-Dairy-Milk-Silk-Heart-Shaped-Valentines-Chocolate-Gift-Box.jpeg',
      category: 'Confectionery'
    },
    {
      id: 7,
      name: 'Paan',
      price: 15,
      originalPrice: 20,
      image: 'https://cdn.zeptonow.com/production/tr:w-640,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/fbde79f6-ee4d-4a7c-8b61-56d0b22e9975.jpeg',
      category: 'Paan Corner'
    },
    {
      id: 8,
      name: 'Bread',
      price: 35,
      originalPrice: 40,
      image: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/487a5c88-eaca-4cc4-b69f-b4f4b0ab1a85/Britannia-Brown-Bread.jpeg',
      category: 'Bakery'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <Card className="product-card h-100">
            <div 
              className="product-img-container"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="product-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/products/placeholder.jpg';
                }}
              />
              <div className="discount-badge">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </div>
            </div>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="text-muted">{product.category}</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="product-price">₹{product.price}</span>
                  <span className="original-price">₹{product.originalPrice}</span>
                </div>
                <Button 
                  variant="zepto" 
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;