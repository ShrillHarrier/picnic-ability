import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './style.css';
import './custombutton.css';

function Main(){

	function scrolltosub() {
	  window.scrollBy(0, 400);
	}

	return(
		<div id="homepage">
      		<div id="hometext" className="flexcol">
      			<h>What is PicnicAbility?</h>
      			<p>PicnicAbility is a site where we review things. Some other stuff will go here. Sample sample sample. </p>
      			<Button onClick={scrolltosub} id="homebutton" active>Learn More &#8594;</Button>
      		</div>
    	</div>
	)
}

export default Main;