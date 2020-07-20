import React from 'react';
import NavBar from './components/navbar';
import HomePage from './components/homepage';
import Footer from './components/footer';
import Subscribe from './components/subscribepage'
import TravelPlans from './components/travelplans'

class App extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      }
	}

	componentDidMount(){
		fetch("http://192.168.1.17:3001/")
		.then(response => response.json())
		.then(data => console.log(data))
	}

  render(){
    return(
    	<body>
	    	<header>
	    		<NavBar/>
	    	</header>

	    	<section>
	    		<HomePage/>
	    	</section>

	    	<section>
	    		<Subscribe/>
	    	</section>

	    	<section>
	    		<TravelPlans/>
	    	</section>

	    	<footer>
	    		<Footer/>
	    	</footer>
	 	</body>
    )
  }
}

export default App;
