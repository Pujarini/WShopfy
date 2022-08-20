import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Link to="/">
            <Navbar.Brand>PREPSHOP</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link>
                <Link to="/cart">
                  <i class="fa-solid fa-cart-shopping"></i> Cart
                </Link>
              </Nav.Link>

              <Nav.Link eventKey={2}>
                <Link to="signIn">
                  <i class="fa-solid fa-user"></i> Sign In
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
