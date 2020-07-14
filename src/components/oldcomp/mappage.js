import React, {Component} from 'react';
import GoogleMap from './googlemap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Main(){
	return(
		<div id="mappage">
			<GoogleMap/>
		</div>
	)
}

export default Main;