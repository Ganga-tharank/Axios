import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Topbar() {
  let navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <h5>
                <b>React-Axios</b>
              </h5>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/")}>
              <h5>
                <b>Home</b>
              </h5>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/dashboard")}>
              <h5>
                <b>Dashboard</b>
              </h5>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/create")}>
              <h5>
                <b>Create</b>
              </h5>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;