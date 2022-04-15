import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";

const Login = () => {
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          <p className="mt-3">
            Create a new account{" "}
            <Link
              to="/signup"
              className="text-decoration-none text-danger fw-bold"
            >
              Signup
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
