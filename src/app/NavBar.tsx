'use client';
import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'



const NavBar = () => {
  return (
    <div>
     

    <Navbar expand="lg" className="bg-body-dark" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="/">Encrypt-Decrypt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/">Link</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Another action
              </NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default NavBar
