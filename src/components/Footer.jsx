import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>ZeptoNow</h5>
            <p className="text-muted">Groceries delivered in minutes.</p>
            <div className="d-flex">
              <a href="#" className="text-white me-3"><FaFacebook /></a>
              <a href="#" className="text-white me-3"><FaTwitter /></a>
              <a href="#" className="text-white me-3"><FaInstagram /></a>
              <a href="#" className="text-white"><FaLinkedin /></a>
            </div>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Home</a></li>
              <li><a href="#" className="text-muted">Categories</a></li>
              <li><a href="#" className="text-muted">Offers</a></li>
              <li><a href="#" className="text-muted">New Arrivals</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Contact Us</a></li>
              <li><a href="#" className="text-muted">FAQs</a></li>
              <li><a href="#" className="text-muted">Shipping Policy</a></li>
              <li><a href="#" className="text-muted">Returns & Refunds</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">About Us</a></li>
              <li><a href="#" className="text-muted">Careers</a></li>
              <li><a href="#" className="text-muted">Privacy Policy</a></li>
              <li><a href="#" className="text-muted">Terms of Service</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center text-muted">
            <p>© 2023 ZeptoNow. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;