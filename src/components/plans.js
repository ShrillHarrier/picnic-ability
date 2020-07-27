import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './articlestyle.css'

class Plans extends Component{

	putlocation = () => {
		if(this.props.province != null){
				return <h1>{this.props.province + ", " + this.props.country}</h1>
			}
		else{
				return <h1>{this.props.country}</h1>
			}
	}

	render() {
		return(
			<div style={{backgroundImage: "url(" + this.props.image + ")"}} div id="plandiv">
				<h>{this.props.name}</h>
				{this.putlocation()}
				<Button id="planbutton" href={"//" + this.props.link}>Read</Button>
			</div>
		)
	}
}

export default Plans;