import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
   return (
      <div>
         <h1>NavBar</h1>
         <li><NavLink to="/">Home Page</NavLink></li>
         <li><NavLink to="/login">Login</NavLink></li>
         <li><NavLink to="/signup">Sign UP</NavLink></li>
         <li><NavLink to="/outfits">All Outfits</NavLink></li>
         <li><NavLink to="/users">All Users</NavLink></li>
         <li><NavLink to="/tops">Tops</NavLink></li>
         <li><NavLink to="/bottoms">Bottoms</NavLink></li>
         <li><NavLink to="/shoes">Shoes</NavLink></li>
         <li><NavLink to="/outfits/new">Create Outfit</NavLink></li>
      </div>
   )
}
