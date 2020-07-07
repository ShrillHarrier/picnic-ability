import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './style.css'

function Main(){
	return(
		<Navbar collapseOnSelect expand="lg" id = "nav" fixed="top">
  			<Navbar.Brand id = "navlogo" href="#homepage">Picnic Ability</Navbar.Brand>
  			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  			<Navbar.Collapse id="navlinks">
    			<Nav className="ml-auto" id="navlinks">
      				<Nav.Link href="#aboutpage">About</Nav.Link>
      				<Nav.Link href="#mappage">Map</Nav.Link>
      				<Nav.Link href="#articlepage">Articles</Nav.Link>
      				{/*<Nav.Link href="">Products</Nav.Link>*/}
      				<Nav.Link href="#contactpage">Contact</Nav.Link>
      			</Nav>
  			</Navbar.Collapse>
		</Navbar>
	)
}

export default Main;