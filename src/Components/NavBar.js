import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'; 

const NavBar = () => {
   return (
      <Navbar bg="light" expand="lg">
         <Navbar.Brand href="/">Home</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               {/* <Nav.Link href="/outfits/new">My Wardrobe</Nav.Link> */}
            <NavDropdown title="Community" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/outfits">Outfits</NavDropdown.Item>
                  <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="/outfits/new">Create Outfit</NavDropdown.Item> */}
               </NavDropdown>
               <NavDropdown title="See Options" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/tops">Tops</NavDropdown.Item>
                  <NavDropdown.Item href="/bottoms">Bottoms</NavDropdown.Item>
                  <NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/outfits/new">Create Outfit</NavDropdown.Item>
               </NavDropdown>
            </Nav>
            <Form inline>
               <Button href="/login" variant="outline-secondary" className="navBtn">Log In</Button>
               <Button href="/signup" variant="outline-secondary" className="navBtn">Sign Up</Button>
            </Form>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default NavBar