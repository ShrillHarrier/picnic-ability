import React, {Component} from 'react';
import Blog from './blogs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Articles extends Component{

	constructor() {
	    super();
	    this.state = {
	    	articles: [{name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}]
	      }
	}

	async componentDidMount (){
		const response = await fetch("http://192.168.1.17:3001/blogs")
		const data = await response.json()
		
		this.setState({articles: data});
		console.log(this.state.articles[2].date)
	}

	render() {
		const first = 1
		const second = 2;
		const third = 3;

		return(
			<div id="articlepage" className="flexrow">
				<div id="travel" className="flexcol halfpage">
					<h>Recent Travel Plans</h>
				</div>
				<div id="blog" className="flexcol halfpage">
					<h>Latest Blogs</h>
					<div className="flexrow fullpage">
						<Blog 
							name={this.state.articles[this.state.articles.length-first].name} 
							link={this.state.articles[this.state.articles.length-first].link}
							image={this.state.articles[this.state.articles.length-first].image}
							date={this.state.articles[this.state.articles.length-first].date}/>
						<Blog 
							name={this.state.articles[this.state.articles.length-second].name} 
							link={this.state.articles[this.state.articles.length-second].link}
							image={this.state.articles[this.state.articles.length-second].image}
							date={this.state.articles[this.state.articles.length-second].date}/>
						<Blog 
							name={this.state.articles[this.state.articles.length-third].name} 
							link={this.state.articles[this.state.articles.length-third].link}
							image={this.state.articles[this.state.articles.length-third].image}
							date={this.state.articles[this.state.articles.length-third].date}/>
					</div>
				</div>
	    	</div>
		)
	}
}

export default Articles;