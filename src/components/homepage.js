import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './style.css';
import './custombutton.css';

class HomePage extends Component{
	constructor() {
	    super();
	    this.state = {
	    	clicks: 0
	      }
	}

	scrolltosub = () => {
	  window.scrollBy(0, 400);
	  this.setState({clicks: this.state.clicks + 1});
	  {/*console.log(this.state.clicks);*/}
	}

	render(){
		return(
			<div id="homepage">
	      		<div id="hometext" className="flexcol">
	      			<h>What is PicnicAbility?</h>
	      			<p>PicnicAbility is a site where we review things. Some other stuff will go here. Sample sample sample. More text, in theory, will appear here.</p>
	      			<Button onClick={this.scrolltosub} id="homebutton" active>Learn More &#8594;</Button>
	      		</div>
	    	</div>
		)
	}
}

export default HomePage;