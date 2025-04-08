import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col, Card } from 'react-bootstrap';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fresh Apples',
      price: 120,
      quantity: 2,
      image: 'https://www.bigbasket.com/media/uploads/p/l/40128384_5-fresho-apple-pink-lady.jpg'
    },
    {
      id: 2,
      name: 'Whole Wheat Bread',
      price: 45,
      quantity: 1,
      image: 'https://www.earthytales.in/uploads/products/wholewheat-bread_(1).jpg'
    },
    {
      id: 3,
      name: 'Organic Milk',
      price: 60,
      quantity: 3,
      image: 'https://www.bbassets.com/media/uploads/p/l/40311259_2-akshayakalpa-organic-cow-milk.jpg'
    }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  return (
    <Container className="my-5">
      <Button variant="outline-secondary" onClick={() => navigate(-1)} className="mb-4">
        <FaArrowLeft className="me-2" />
        Continue Shopping
      </Button>
      
      <h2 className="mb-4">Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <Card className="text-center p-5">
          <h4>Your cart is empty</h4>
          <p>Add some products to your cart</p>
          <Button variant="success" onClick={() => navigate('/')}>Shop Now</Button>
        </Card>
      ) : (
        <Row>
          <Col lg={8}>
            <Table responsive>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} className="cart-item">
                    <td>
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '15px' }}
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>₹{item.price}</td>
                    <td>
                      <div className="quantity-control">
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <Form.Control 
                          type="number" 
                          value={item.quantity} 
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="quantity-input"
                          min="1"
                        />
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td>₹{item.price * item.quantity}</td>
                    <td>
                      <Button 
                        variant="outline-danger" 
                        size="sm" 
                        onClick={() => removeItem(item.id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col lg={4}>
            <Card className="p-3">
              <h5 className="mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3 fw-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <Button variant="success" className="w-100">Proceed to Checkout</Button>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;