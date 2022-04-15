import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <Container>
        <Row>
          <Col md="6">
            <img src={logo} alt="logo" className="w-50" srcSet="" />
          </Col>
          <Col md="3" className="text-white fw-bold my-3">
            <p>About our food</p>
            <p>Read our blog</p>
            <p>Sign up to deliver</p>
            <p>Add your restaurant</p>
          </Col>
          <Col md="3" className="text-white fw-bold my-3">
            <p>Get help</p>
            <p>Read FAQs</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
