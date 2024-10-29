// src/components/Header.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import './css/Header.css';  // For optional custom styling

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src="./logo.png"  // Replace with the path to your logo
            alt="Logo"
            className="d-inline-block align-top"
            style={{ width: '181px', height: '43px' }}
          />{' '}
        </Navbar.Brand>

        {/* Menu Toggle Button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Menu Items */}
        <Navbar.Collapse id="responsive-navbar-nav navbar-right">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#">Find Suppliers</Nav.Link>
            
            {/* Dropdown */}
            <NavDropdown title="Find Service Tags" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/login-signup">
              <Button variant="btn">Login / Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
