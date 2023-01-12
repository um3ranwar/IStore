import {Nav, Navbar, NavLink} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const Navigationbar = ({cartItems}) => {
const [search ,setSearch] =useState("");

function handleChange (event){
  const route = "/"+event.target.value;
  setSearch(route);
}

return(
     <header>
 <Link to ="/" Style="color:black;">
         <h1>
         iStore
         <img src="/apple.png" class="apple" alt="No " />
  </h1>
  </Link>
<Navbar collapseOnSelect expand="sm"  variant="dark" Style="padding-bottom:0;">
<Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav>
<NavLink eventKey="1" as={Link} to="/">Home</NavLink>
<NavLink eventKey="2" as={Link} to="/Contact">Contact</NavLink>
<NavLink eventKey="3" as={Link} to="/SignUp">SignUp</NavLink>
<NavLink eventKey="4" as={Link} to="/LogIn">LogIn</NavLink>
</Nav>
</Navbar.Collapse>
<form  role="search">

<input class="search me-4" type="search" onChange={handleChange} placeholder="Search" aria-label="Search"/>
<Link to={search}><button class="btn btn-outline-success" type="submit">Search</button></Link>
</form>
<div className="Cartdiv">
<p className="CartItemNumber">{cartItems.length}</p>
<NavLink Style="padding-top:0;" eventKey="5" as={Link} to="/Cart"><button className="cart"><img src="cart.png" className="cart"/></button></NavLink>

</div>
</Navbar>
</header>
);
}

export default Navigationbar;
