import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Blogs extends Component{

	render() {
		return(
			<div style={{backgroundImage: "url(" + this.props.image + ")"}} div id="blogdiv">
				<h>{this.props.name}</h>
				<h1>{this.props.date.substring(0,10)}</h1>
				<Button id="blogbutton" href={"//" + this.props.link}>View</Button>
			</div>
		)
	}
}

export default Blogs;