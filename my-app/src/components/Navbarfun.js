import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../css/colors.css";
import "../App.css";

export default function Navbarfun() {
  return (
    <div>
      <Navbar className="faded-Dark nav">
        <Container className="retro-text align-content">
          <Nav className="gradient-text me-auto">
            <Nav.Link as={Link} to={"/"}>
              <h1 className=""> HOME </h1>
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              <h1 className="">ABOUT</h1>
            </Nav.Link>
            <Nav.Link as={Link} to={"/blogposts"}>
              <h1 className="">BLOG</h1>
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"}>
              <h1 className="">PROJECTS</h1>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
