import "./nav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';


class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg={this.props.modeData?"dark":"light"} variant={this.props.modeData?"dark":"light"}>
          <Container>
            <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;