import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';
import './style.css';

class Subscribe extends Component{
	constructor() {
	    super();
	    this.state = {
	      }
	}

	render() {
		return(
			<div id="subscribe">
	      		<div className="halfpage flexcol" id="subinfo">
	      			<h>Subscribe</h>
	      			<p>Subscribe to be notified on group dates to the sets and the occasional news letter.</p>
	      		</div>
	      		<div className="halfpage flexcol" id="subform">
	      			<h>Info &#8595;</h>
	      			<Form className="flexrow" id="sub">

	      			  {/*use google api for places*/}
	      			  <Form.Group>
	      			   <Form.Label>Country</Form.Label>
					    <Form.Control type="" placeholder="Canada" />
					  </Form.Group>
		      			
					  <Form.Group controlId="formBasicEmail">
					   <Form.Label>Email</Form.Label>
					    <Form.Control type="email" placeholder="Name@example.com" />
					  </Form.Group>

					  <Button id="subbutton">Subscribe</Button>
					</Form>
	      		</div>
	    	</div>
		)
	}
}

export default Subscribe;