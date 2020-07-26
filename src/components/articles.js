import React, {Component} from 'react';
import Blog from './blogs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Articles extends Component{

	constructor() {
	    super();
	    this.state = {
	    	articles: [{name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}]
	      }
	}

	async componentDidMount(){
		const response = await fetch("http://192.168.1.17:3001/blogs")
		const data = await response.json()
		
		this.setState({articles: data})
	}

	render() {
		return(
			<div id="articlepage" className="flexrow">
				<div id="travel" className="flexcol halfpage">
					<h>Recent Travel Plans</h>
				</div>
				<div id="blog" className="flexcol halfpage">
					<h>Latest Blogs</h>
					<div className="flexrow fullpage">
						<Blog 
							name={this.state.articles[this.state.articles.length-1].name} 
							link={this.state.articles[this.state.articles.length-1].link}
							image={this.state.articles[this.state.articles.length-1].image}
							date={this.state.articles[this.state.articles.length-1].date}/>
						<Blog 
							name={this.state.articles[this.state.articles.length-2].name} 
							link={this.state.articles[this.state.articles.length-2].link}
							image={this.state.articles[this.state.articles.length-2].image}
							date={this.state.articles[this.state.articles.length-2].date}/>
						<Blog 
							name={this.state.articles[this.state.articles.length-3].name} 
							link={this.state.articles[this.state.articles.length-3].link}
							image={this.state.articles[this.state.articles.length-3].image}
							date={this.state.articles[this.state.articles.length-3].date}/>
					</div>
				</div>
	    	</div>
		)
	}
}

export default Articles;