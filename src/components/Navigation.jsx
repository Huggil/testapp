import React from 'react';
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <Logo />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            to="/home"
            className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/randompaint"
            className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
          >
            <li>Aujourd'hui ?</li>
          </NavLink>
          <NavLink
            to="/chat"
            className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
          >
            <li>Tchat</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-link active" : "nav-link")}
          >
            <li>A Propos</li>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
