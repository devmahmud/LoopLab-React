import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
      <Container>
        <Link to="/" className="navbar-brand">
          LoopLAB
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <NavLink to="/explore" className="nav-link">
              Explore
            </NavLink>
            <NavLink to="/create" className="nav-link">
              Create
            </NavLink>
            <NavLink to="/share" className="nav-link">
              Share
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
