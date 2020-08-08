const http = require('http')
const express = require('express');
const knex = require('knex');
const cors = require('cors');
const bp = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());

app.get('/', (req, res) => {
	res.send("Working.");
})

app.get('/travelplans', (req, res) => {
	db.select('*').from('travelplans')
	.then(data => {
		res.json(data)
	})
	console.log("plans sent");
})

app.get('/blogs', (req, res) => {
	db.select('*').from('blogs')
	.then(data => {
		res.json(data)
	})
	console.log("blogs sent");
})

app.post('/subscribe', (req, res) => {
	if(req.body.email != "" && req.body.country != ""){
		db('subscribers').insert([{email: req.body.email, country: req.body.country}])
		.then(res.send("You are now subscribed."));
		db.select('*').from('subscribers').then(data => {
		console.log(data)});
		console.log("sub sent");
	}
	else{
		res.send("Missing some information.")
	}
})

app.listen("a2plcpnl0446.prod.iad2.secureserver.net", () => {
	console.log("Connected to the port 3001.");
})

const db = knex({
	client: "pg",
	connection: {
		host: "localhost",
		user: "postgres",
		password: "1357",
		database: "Test",
	}
})





