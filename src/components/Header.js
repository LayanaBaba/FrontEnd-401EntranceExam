import React, { Component } from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap/';


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favorite">FavoriteDigimons</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
            </div>
        )
    }
}

export default Header
