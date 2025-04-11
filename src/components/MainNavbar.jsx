import React, { useContext } from 'react';
import { Navbar, Nav, Container, Form, Button, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const MainNavbar = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="navbar-zepto shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-zepto">
          Zepto
        </Navbar.Brand>
        
        <div className="d-flex align-items-center ms-3 location-selector">
          <FaMapMarkerAlt className="me-1" />
          <span className="d-none d-md-inline">Select Location</span>
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-3 search-form">
            <Form.Control
              type="search"
              placeholder="Search for products..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="zepto" className="search-btn">
              <FaSearch />
            </Button>
          </Form>
          
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login" className="nav-link-zepto">
              <FaUser className="me-1" />
              <span className="d-none d-md-inline">Login</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link-zepto position-relative">
              <FaShoppingCart className="me-1" />
              <span className="d-none d-md-inline">Cart</span>
              {cartCount > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;