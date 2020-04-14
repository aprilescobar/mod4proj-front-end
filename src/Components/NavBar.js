import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'; 

const NavBar = () => {
   return (
      <Navbar bg="light" expand="lg">
         <Navbar.Brand><Link to='/' className="links">Home</Link></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Community" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/outfits" className="links">Outfits</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/users" className="links">Users</Link></NavDropdown.Item>
               </NavDropdown>
               <NavDropdown title="See Options" id="basic-nav-dropdown">
                  <NavDropdown.Item componentClass='span'><Link to='/tops' className="links">Tops</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/bottoms" className="links">Bottoms</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/shoes" className="links">Shoes</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link to="/outfits/new" className="links">Create Outfit</Link></NavDropdown.Item>
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