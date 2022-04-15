import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";

const SignUp = () => {
  return (
    <Container className="banner mb-5">
      <Row className="px-2">
        <Col md="5" className="mx-auto">
          <img
            src={logo}
            alt=""
            srcset=""
            className="mb-5 w-50 mx-auto d-block"
          />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="email" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm your password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100">
              Signup
            </Button>
          </Form>
          <p className="mt-3">
            Already have an account{" "}
            <Link
              to="/login"
              className="text-decoration-none text-danger fw-bold"
            >
              Login
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
