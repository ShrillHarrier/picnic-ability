import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './style.css'
import NavBar from './navbar';
import Logo from './logo';

function Main(){
	return(
		<div id="toppage" className="flexrow">
			<Logo/>
	        <NavBar/>
		</div>
	)
}

export default Main;