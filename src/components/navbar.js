import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './style.css'

function Main(){
	return(
			<Navbar collapseOnSelect id="nav" expand="lg" sticky="top">
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse className="d-flex justify-content-around" id="responsive-navbar-nav">
			      <NavDropdown title="Home" id="collasible-nav-dropdown">
			      </NavDropdown>
			      <NavDropdown title="Articles" id="collasible-nav-dropdown">
			      </NavDropdown>
			      <NavDropdown title="Trips" id="collasible-nav-dropdown">
			      </NavDropdown>
			      <NavDropdown title="Tried-True Products" id="collasible-nav-dropdown">
			      </NavDropdown>
			      <NavDropdown title="About" id="collasible-nav-dropdown">
			      </NavDropdown>
			  </Navbar.Collapse>
			</Navbar>
	)
}

export default Main;