import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import './style.css'

function Main(){
	return(
		<div id="contactpage" className="flexcol">
			<h>Share your destination experience!</h>
			<Form id="contactform">
			  <Form.Group controlId="formBasicEmail">
			    <Form.Label>Email Address</Form.Label>
			    <Form.Control type="email" placeholder="Name@example.com" />
			  </Form.Group>

			  <Form.Group controlId="formBasicEmail">
			    <Form.Label>Enter a Location</Form.Label>
			    <Form.Control type="text" placeholder="Location" />
			  </Form.Group>

			  <Form.Group controlId="exampleForm.ControlTextarea1">
			    <Form.Label>Share your expereince</Form.Label>
			    <Form.Control placeholder="Enter your experience here." as="textarea" rows="3" />
			  </Form.Group>
			  <Button variant="primary" type="submit">
			    Submit
			  </Button>
			</Form>
		</div>
	)
}

export default Main;