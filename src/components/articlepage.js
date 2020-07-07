import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import './style.css'

function Main(){
	var w = window.innerWidth;
	var flextype;
	console.log(w)

	if(w < 650){
		flextype = "flexcol"
	}
	else{
		flextype = "flexrow"
	}

		return(
			<div id="articlepage" className={flextype}>
	  			<div className="cards">
	  				<h>Itineraries</h>
	  			</div>
	  			<div className="cards">
	  				<h>Blog</h>
	  			</div>
	    	</div>
		)
}

export default Main;