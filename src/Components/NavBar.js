import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'; 

export default function NavBar() {
   return (
      <Navbar bg="light" expand="lg">
         <Navbar.Brand href="/">Home</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="/outfits">All Outfits</Nav.Link>
               <Nav.Link href="/users">All Users</Nav.Link>
               <NavDropdown title="See Options" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/tops">Tops</NavDropdown.Item>
                  <NavDropdown.Item href="/bottoms">Bottoms</NavDropdown.Item>
                  <NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/outfits/new">Create Outfit</NavDropdown.Item>
               </NavDropdown>
            </Nav>
            <Form inline>
               <Button href="/login" variant="outline-success">Log In</Button>
               <Button href="/signup" variant="outline-success">Sign Up</Button>
            </Form>
         </Navbar.Collapse>
      </Navbar>

      // <div>
      //    <h1>NavBar</h1>
      //    <li><NavLink to="/">Home Page</NavLink></li>
      //    <li><NavLink to="/login">Login</NavLink></li>
      //    <li><NavLink to="/signup">Sign UP</NavLink></li>
      //    <li><NavLink to="/outfits">All Outfits</NavLink></li>
      //    <li><NavLink to="/users">All Users</NavLink></li>
      //    <li><NavLink to="/tops">Tops</NavLink></li>
      //    <li><NavLink to="/bottoms">Bottoms</NavLink></li>
      //    <li><NavLink to="/shoes">Shoes</NavLink></li>
      //    <li><NavLink to="/outfits/new">Create Outfit</NavLink></li>
      // </div>
   )
}
