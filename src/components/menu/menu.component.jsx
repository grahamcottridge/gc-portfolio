import React from "react";

import "./menu.styles.scss";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => (
  <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
    <Navbar.Brand href="#home">Graham Cottridge</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav></Nav>
      <Nav className="mr-auto justify-content-end">
        <Nav.Item>
          <Nav.Link href="#about">About me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
