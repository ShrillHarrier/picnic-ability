import React from 'react';
import NavBar from './components/navbar';
import HomePage from './components/homepage';
import AboutPage from './components/aboutpage';
import Map from './components/mappage';
import Article from './components/articlepage';
import ContactPage from './components/contactpage';
import Footer from './components/footer';

class App extends React.Component {
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
	    		<AboutPage/>
	    	</section>

	    	<section>
	    		<Map/>
	    	</section>

	    	<section>
	    		<Article/>
	    	</section>

	    	<section>
	    		<ContactPage/>
	    	</section>

	    	<footer>
	    		<Footer/>
	    	</footer>
	 	</body>
    )
  }
}

export default App;