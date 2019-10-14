import React from "react";

import "./menu.styles.scss";

import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// onClick={() => window.location.reload(false); window.scrollTo(0, 0);}

const Menu = () => (
  <div>
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
      <Navbar.Brand as={Link} to="/">
        Graham Cottridge
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-end">
          <Nav.Item>
            <Nav.Link as={Link} to="aboutme">
              About me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="projects">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Menu;
