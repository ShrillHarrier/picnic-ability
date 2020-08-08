import React, {Component} from 'react';
import GoogleMap from './googlemap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './style.css';

class TravelPlans extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      }
	}

	render(){
		return(
				<div id="travelpage">
					<div id="travelinfo">
						<p>Where have people written a travel plan?</p>
						<p>Stay tuned for live map updates &#8594;</p>
						{/*<br></br>*/}
						<Button href="#articlepage" id="travelbutton">View Most Recent</Button>
					</div>
					<div id="travelmap">
						<GoogleMap/>
					</div>
					<div className="flexrow">
						<div id="travelsubmit">
							<p>Want to submit your own review?</p>
							<p>Document your experience with "TravelPlan" in the subject line, then send to <a target="_blank"href="http://theresafauconier@gmail.com">theresafauconier@gmail.com</a></p>
							<p>Please include: country, city, name of resort/destination and date of trip</p>
						</div>
						<form action="mailto:someone@example.com" method="post" enctype="text/plain">
						</form>
					</div>
		    	</div>
			)
	}
}

export default TravelPlans;