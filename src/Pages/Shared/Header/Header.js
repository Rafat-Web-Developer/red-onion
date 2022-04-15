import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";

const Header = () => {
  return (
    <header className="py-3">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="site_logo"
              style={{ width: "150px" }}
              srcSet=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="fw-bold">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="fw-bold">
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/signup"
                className="fw-bold btn btn-danger text-white rounded-pill px-3"
              >
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
