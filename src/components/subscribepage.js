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
	    	email: "",
	    	country: ""
	      }
	}

	countryChange = (event) => {
		this.setState({country: event.target.value});
		console.log(this.state.country);
	}

	emailChange = (event) => {
		this.setState({email: event.target.value});
		console.log(this.state.email);
	}

	submit = () => {
		fetch("http://192.168.1.17:3001/subscribe", {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				"email": this.state.email,
				"country": this.state.country
			})
		})
		.then(response => response.json())
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
					    <Form.Control onChange={this.countryChange} type="" placeholder="Canada" />
					  </Form.Group>
		      			
					  <Form.Group controlId="formBasicEmail">
					   <Form.Label>Email</Form.Label>
					    <Form.Control onChange={this.emailChange} type="email" placeholder="Name@example.com" />
					  </Form.Group>

					  <Button onClick = {this.submit} id="subbutton">Subscribe</Button>
					</Form>
	      		</div>
	    	</div>
		)
	}
}

export default Subscribe;