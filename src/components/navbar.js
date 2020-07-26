import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './style.css'

function Main(){
	return(
		<Navbar collapseOnSelect expand="lg" id = "nav" fixed="top">
  			<Navbar.Brand id = "navlogo" href="#homepage">PicnicAbility</Navbar.Brand>
  			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  			<Navbar.Collapse id="navlinks">
    			<Nav className="ml-auto" id="navlinks">
      				<Nav.Link className="navspace" href="#travelpage">Travel Plans</Nav.Link>
      				<Nav.Link className="navspace" href="#articlepage">Blog</Nav.Link>
              <Nav.Link className="navspace" href="">Contact</Nav.Link>
      			</Nav>
  			</Navbar.Collapse>
		</Navbar>
	)
}

export default Main;