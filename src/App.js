import React from 'react';
import NavBar from './components/navbar';
import HomePage from './components/homepage';
import Footer from './components/footer';
import Subscribe from './components/subscribepage'
import TravelPlans from './components/travelplans'
import Articles from './components/articles'

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      }
	}

	async componentDidMount(){
		const response = await fetch("192.168.1.17:3001/");
		const data = await response.json();
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

	    	<section>
	    		<Articles/>
	    	</section>

	    	<footer>
	    		<Footer/>
	    	</footer>
	 	</body>
    )
  }
}

export default App;
