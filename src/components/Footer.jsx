import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-zepto py-5">
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="text-white">Zepto</h5>
            <p className="text-muted">Groceries delivered in minutes.</p>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><FaFacebook /></a>
              <a href="#" className="text-white me-3"><FaTwitter /></a>
              <a href="#" className="text-white me-3"><FaInstagram /></a>
              <a href="#" className="text-white"><FaLinkedin /></a>
            </div>
          </Col>
          
          <Col md={3} className="mb-4">
            <h5 className="text-white">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h5 className="text-white">Customer Service</h5>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Refunds</a></li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h5 className="text-white">Company</h5>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </Col>
        </Row>
        
        <Row className="footer-bottom">
          <Col className="text-center text-muted">
            <p>© {new Date().getFullYear()} Zepto. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;