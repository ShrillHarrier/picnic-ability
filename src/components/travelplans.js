import React, {Component} from 'react';
import GoogleMap from './googlemap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './style.css';

function Main(){
	return(
			<div id="travelpage">
				<div id="travelinfo">
					<p>Where have people written a travel plan?</p>
					<p>Checkout our travel plan here &#8594;</p>
					<br></br>
					<Button></Button>
				</div>
				<div id="travelmap">
					<GoogleMap/>
				</div>
				<div id="travelsubmit">
					<p>Are we supposed to put a form here? I am not sure. However, we should get this reviewed.</p>
				</div>
	    	</div>
		)
}

export default Main;