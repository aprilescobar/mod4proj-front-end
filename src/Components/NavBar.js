import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'; 

const NavBar = () => {
   return (
      <Navbar bg="light" expand="lg">
         <Navbar.Brand href="/">Home</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="/users">Users</Nav.Link>
               <Nav.Link href="/outfits">Outfits</Nav.Link>
               <Nav.Link href="/outfits/new">Collection</Nav.Link>
               <NavDropdown title="See Options" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/tops">Tops</NavDropdown.Item>
                  <NavDropdown.Item href="/bottoms">Bottoms</NavDropdown.Item>
                  <NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/outfits/new">Create Outfit</NavDropdown.Item>
               </NavDropdown>
            </Nav>
            <Form inline>
               <Button href="/login" variant="outline-secondary">Log In</Button>
               <Button href="/signup" variant="outline-secondary">Sign Up</Button>
            </Form>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default NavBar