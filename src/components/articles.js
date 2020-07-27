import React, {Component} from 'react';
import Blog from './blogs';
import Plan from './plans';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Articles extends Component{

	constructor(props) {
	    super(props);
	    this.state = {
	    	articles: [{name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {name:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}],
	    	travelplans: [{destination:"Loading...", province:"Loading...", country:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {destination:"Loading...", province:"Loading...", country:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}, {destination:"Loading...", province:"Loading...", country:"Loading...", link:"Loading...", image:"Loading...", date:"Loading..."}] 
	      }
	}

	async componentDidMount (){
	    const response1 = await fetch("http://192.168.1.17:3001/travelplans")
		const plandata = await response1.json()

		this.setState({travelplans: plandata});

		const response2 = await fetch("http://192.168.1.17:3001/blogs")
		const blogdata = await response2.json()

		this.setState({articles: blogdata});
	}

	render() {
		const planfirst = this.state.travelplans.length-1;
		const plansecond = this.state.travelplans.length-2;
		const planthird = this.state.travelplans.length-3;

		const articlefirst = this.state.articles.length-1;
		const articlesecond = this.state.articles.length-2;
		const articlethird = this.state.articles.length-3;

		return(
			<div id="articlepage" className="flexrow">
				<div id="travel" className="flexcol halfpage">
					<h>Recent Travel Plans</h>
					<div className="flexrow fullpage">
						<Plan name={this.state.travelplans[planfirst].destination} 
							link={this.state.travelplans[planfirst].link}
							image={this.state.travelplans[planfirst].image}
							date={this.state.travelplans[planfirst].date}
							country={this.state.travelplans[planfirst].country}
							province={this.state.travelplans[planfirst].province}/>
						<Plan 
							name={this.state.travelplans[plansecond].destination} 
							link={this.state.travelplans[plansecond].link}
							image={this.state.travelplans[plansecond].image}
							date={this.state.travelplans[plansecond].date}
							country={this.state.travelplans[plansecond].country}
							province={this.state.travelplans[plansecond].province}/>
						<Plan 
							name={this.state.travelplans[planthird].destination} 
							link={this.state.travelplans[planthird].link}
							image={this.state.travelplans[planthird].image}
							date={this.state.travelplans[planthird].date}
							country={this.state.travelplans[planthird].country}
							province={this.state.travelplans[planthird].province}/>
					</div>
				</div>
				<div id="blog" className="flexcol halfpage">
					<h>Latest Blogs</h>
					<div className="flexrow fullpage">
						<Blog 
							name={this.state.articles[articlefirst].name} 
							link={this.state.articles[articlefirst].link}
							image={this.state.articles[articlefirst].image}
							date={this.state.articles[articlefirst].date}/>
						<Blog 
							name={this.state.articles[articlesecond].name} 
							link={this.state.articles[articlesecond].link}
							image={this.state.articles[articlesecond].image}
							date={this.state.articles[articlesecond].date}/>
						<Blog 
							name={this.state.articles[articlethird].name} 
							link={this.state.articles[articlethird].link}
							image={this.state.articles[articlethird].image}
							date={this.state.articles[articlethird].date}/>
					</div>
				</div>
	    	</div>
		)
	}
}

export default Articles;